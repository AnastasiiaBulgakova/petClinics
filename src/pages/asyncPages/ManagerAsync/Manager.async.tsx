import { lazy, Suspense } from 'react';

const ManagerPage = lazy(() => import('../../Manager/Manager'));

const ManagerPageAsync = () => (
  <Suspense fallback={<div>Загрузка cтраницы...</div>}>
    <ManagerPage />
  </Suspense>
);

export default ManagerPageAsync;
