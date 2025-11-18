import { Suspense } from 'react';
import HomeClientWrapper from './components/HomeClientWrapper';
import TransparentHeader from "@/components/transparent-header";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const sp = await searchParams;
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <HomeClientWrapper searchParams={sp} />
    </Suspense>
  );
}
