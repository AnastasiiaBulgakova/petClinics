import { lazy, Suspense } from 'react';

const ClientPage = lazy(() => import('../../Client/Client'));

const ClientPageAsync = () => (
  <Suspense fallback={<div>Загрузка cтраницы...</div>}>
    <ClientPage />
  </Suspense>
);

export default ClientPageAsync;
