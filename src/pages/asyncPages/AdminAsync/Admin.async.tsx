import { lazy, Suspense } from 'react';

const AdminPage = lazy(() => import('../../Admin/Admin'));

const AdminPageAsync = () => (
  <Suspense fallback={<div>Загрузка Админ Страницы...</div>}>
    <AdminPage />
  </Suspense>
);

export default AdminPageAsync;
