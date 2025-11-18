-- 1. Insertar categorías de ejemplo basadas en tu panel actual
INSERT INTO categories (id, title, description, slug, created_at)
VALUES
  ('diseno-web-para-empresas', 'Diseño Web', 'Diseño y desarrollo web profesional', 'diseno-web-para-empresas', NOW()),
  ('automatizacion-para-tu-empresa', 'Automatización', 'Automatización de procesos empresariales', 'automatizacion-para-tu-empresa', NOW()),
  ('seo-y-campanas-de-marketing', 'Marketing Digital', 'SEO y estrategias de marketing', 'seo-y-campanas-de-marketing', NOW()),
  ('asesoria-de-negocios', 'Asesoría', 'Consejos para emprendedores', 'asesoria-de-negocios', NOW()),
  ('analisis-estrategico', 'Análisis Estratégico', 'Análisis y estrategias de negocio', 'analisis-estrategico', NOW()),
  ('desarrollo-web', 'Desarrollo Web', 'Tecnologías y tendencias en desarrollo web', 'desarrollo-web', NOW()),
  ('posicionamiento-de-marca', 'Posicionamiento de Marca', 'Estrategias para construir marcas fuertes', 'posicionamiento-de-marca', NOW())
ON CONFLICT (id) DO NOTHING;

-- 2. Crear una función para verificar si un usuario es administrador
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN (
    SELECT EXISTS (
      SELECT 1 
      FROM auth.users
      WHERE id = auth.uid() 
      AND raw_user_meta_data->>'role' = 'admin'
    )
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. Configurar políticas RLS para la tabla de artículos
-- Permitir lectura pública de artículos publicados
CREATE POLICY "Acceso público a artículos publicados"
ON articles
FOR SELECT
USING (published = true AND published_at <= NOW());

-- Permitir a los administradores hacer cualquier cosa con los artículos
CREATE POLICY "Acceso completo para administradores en artículos"
ON articles
FOR ALL
USING (is_admin());

-- 4. Configurar políticas para categorías
-- Permitir lectura pública de categorías
CREATE POLICY "Acceso público a categorías"
ON categories
FOR SELECT
USING (true);

-- Permitir a los administradores gestionar categorías
CREATE POLICY "Acceso completo para administradores en categorías"
ON categories
FOR ALL
USING (is_admin());

-- 5. Configurar políticas para etiquetas
CREATE POLICY "Acceso público a etiquetas"
ON tags
FOR SELECT
USING (true);

CREATE POLICY "Acceso completo para administradores en etiquetas"
ON tags
FOR ALL
USING (is_admin());

-- 6. Configurar políticas para article_tags
CREATE POLICY "Acceso público a relaciones artículo-etiqueta"
ON article_tags
FOR SELECT
USING (EXISTS (
  SELECT 1 FROM articles 
  WHERE articles.id = article_tags.article_id 
  AND articles.published = true 
  AND articles.published_at <= NOW()
));

CREATE POLICY "Acceso completo para administradores en article_tags"
ON article_tags
FOR ALL
USING (is_admin());

-- 7. Configurar políticas para estadísticas
CREATE POLICY "Permitir actualización de estadísticas a usuarios autenticados"
ON article_stats
FOR UPDATE
USING (true)
WITH CHECK (auth.role() = 'authenticated');

-- 8. Configurar almacenamiento para imágenes
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true)
ON CONFLICT (id) DO NOTHING;

-- 9. Políticas para el almacenamiento de imágenes
CREATE POLICY "Permitir subida de imágenes a administradores"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'blog-images' AND
  (storage.foldername(name))[1] = 'articles' AND
  is_admin()
);

CREATE POLICY "Permitir actualización de imágenes a administradores"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'blog-images' AND is_admin())
WITH CHECK (bucket_id = 'blog-images' AND is_admin());

CREATE POLICY "Permitir eliminación de imágenes a administradores"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'blog-images' AND is_admin());

-- 10. Función para obtener la URL de una imagen
CREATE OR REPLACE FUNCTION get_image_url(bucket TEXT, path TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN CONCAT('https://', bucket, '.supabase.co/storage/v1/object/public/', bucket, '/', path);
END;
$$ LANGUAGE plpgsql;

-- 11. Crear un trigger para actualizar automáticamente las URLs de las imágenes
CREATE OR REPLACE FUNCTION update_article_image_url()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.image_path IS NOT NULL THEN
    NEW.image_url := get_image_url('blog-images', NEW.image_path);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 12. Aplicar el trigger a la tabla de artículos
CREATE TRIGGER update_article_image_trigger
BEFORE INSERT OR UPDATE OF image_path ON articles
FOR EACH ROW
EXECUTE FUNCTION update_article_image_url();

-- 13. Crear un rol de administrador si no existe
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'admin') THEN
    CREATE ROLE admin;
  END IF;
  GRANT admin TO postgres;  -- Asegúrate de que el usuario postgres tenga rol de admin
END $$;
