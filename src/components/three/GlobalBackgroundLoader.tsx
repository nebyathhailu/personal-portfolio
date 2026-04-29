'use client';
import { lazy, Suspense } from 'react';

const GlobalBackground = lazy(() => import('./GlobalBackground'));

export default function GlobalBackgroundLoader() {
  return (
    <Suspense fallback={null}>
      <GlobalBackground />
    </Suspense>
  );
}
