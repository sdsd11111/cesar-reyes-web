import { pageContent } from "../../lib/content";
import HomeTestClient from "./HomeTestClient";

// Este es el Server Component. Su única responsabilidad es
// obtener los datos y pasarlos al componente cliente.
export default async function HomeTestPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {

  // 1. Decide la versión a mostrar en el servidor
  const sp = await searchParams;
  const view = sp['view'];
  const isEmotionalView = view === 'emocional';
  const content = isEmotionalView ? pageContent.emocional : pageContent.logico;

  // 2. Renderiza el componente cliente con el contenido apropiado
  return <HomeTestClient content={content} isEmotionalView={isEmotionalView} />;
}
