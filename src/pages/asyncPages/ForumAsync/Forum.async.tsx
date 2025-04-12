import { lazy, Suspense } from 'react';

const ForumPage = lazy(() => import('../../Forum/Forum'));

const ForumPageAsync = () => (
  <Suspense fallback={<div>Загрузка Форума...</div>}>
    <ForumPage />
  </Suspense>
);

export default ForumPageAsync;
