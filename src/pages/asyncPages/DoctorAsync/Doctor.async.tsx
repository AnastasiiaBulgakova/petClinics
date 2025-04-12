import { lazy, Suspense } from 'react';

const DoctorPage = lazy(() => import('../../Doctor/Doctor'));

const DoctorPageAsync = () => (
  <Suspense fallback={<div>Загрузка cтраницы...</div>}>
    <DoctorPage />
  </Suspense>
);

export default DoctorPageAsync;
