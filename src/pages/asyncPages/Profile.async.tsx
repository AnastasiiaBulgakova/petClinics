import { lazy, Suspense } from 'react';

const ProfilePage = lazy(() => import('../Profile'));

const ProfilePageAsync = () => (
  <Suspense fallback={<div>Загрузка cтраницы...</div>}>
    <ProfilePage />
  </Suspense>
);

export default ProfilePageAsync;
