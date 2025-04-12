import { lazy, Suspense } from 'react';

const LandingPage = lazy(() => import('../Landing'));

const LandingPageAsync = () => (
  <Suspense fallback={<div>Загрузка cтраницы...</div>}>
    <LandingPage />
  </Suspense>
);

export default LandingPageAsync;
