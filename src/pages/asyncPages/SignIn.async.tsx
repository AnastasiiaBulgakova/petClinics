import { lazy, Suspense } from 'react';

const SignInPage = lazy(() => import('../SignIn'));

const SignInPageAsync = () => (
  <Suspense fallback={<div>Загрузка cтраницы...</div>}>
    <SignInPage />
  </Suspense>
);

export default SignInPageAsync;
