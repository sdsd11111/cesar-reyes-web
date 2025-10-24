'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function TestConnection() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCategories() {
      try {
        console.log('Iniciando carga de categorías...');
        const { data, error: supabaseError } = await supabase
          .from('categories')
          .select('*')
          .limit(5);

        if (supabaseError) {
          console.error('Error de Supabase:', supabaseError);
          throw supabaseError;
        }

        console.log('Categorías cargadas:', data);
        setCategories(data || []);
        setError(null);
      } catch (err) {
        console.error('Error al cargar categorías:', err);
        setError('Error al conectar con la base de datos. Verifica la consola para más detalles.');
      } finally {
        setLoading(false);
      }
    }

    loadCategories();
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Prueba de conexión con Supabase</h2>
      
      <div className="mb-4 p-4 bg-gray-100 rounded">
        <p className="font-mono text-sm">
          <strong>URL:</strong> {process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 30)}...
        </p>
        <p className="font-mono text-sm">
          <strong>Clave anónima:</strong> {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.substring(0, 20)}...
        </p>
      </div>

      {loading ? (
        <div className="p-4 bg-blue-50 text-blue-800 rounded">
          Conectando con Supabase...
        </div>
      ) : error ? (
        <div className="p-4 bg-red-50 text-red-800 rounded">
          ❌ {error}
          <p className="mt-2 text-sm">
            Asegúrate de que:
            <ul className="list-disc pl-5 mt-1">
              <li>Las variables de entorno estén correctamente configuradas</li>
              <li>La URL y clave de Supabase sean correctas</li>
              <li>Las tablas estén creadas en Supabase</li>
              <li>Las políticas RLS estén configuradas correctamente</li>
            </ul>
          </p>
        </div>
      ) : (
        <div>
          <div className="p-4 bg-green-50 text-green-800 rounded mb-4">
            ✅ Conexión exitosa con Supabase
          </div>
          
          <h3 className="text-lg font-semibold mb-2">Categorías encontradas:</h3>
          {categories.length > 0 ? (
            <ul className="list-disc pl-5">
              {categories.map((category) => (
                <li key={category.id} className="mb-1">
                  <span className="font-medium">{category.title}</span>
                  {category.description && ` - ${category.description}`}
                </li>
              ))}
            </ul>
          ) : (
            <p>No se encontraron categorías. Asegúrate de haber creado algunas en Supabase.</p>
          )}
        </div>
      )}
    </div>
  );
}
