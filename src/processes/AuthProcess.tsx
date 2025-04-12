import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLoginUserMutation } from '@/shared/services/api/auth/authentication.api';
import AuthForm from '@/widgets/forms/AuthForm/AuthForm';

const roleRoutes = new Map([
  ['ADMIN', '/admin/dashboard'],
  ['MANAGER', '/manager/reports'],
  ['CLIENT', '/client/profile'],
  ['DOCTOR', '/doctor/schedule'],
]);

const AuthProcess = () => {
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (values: { email: string; password: string; remember: boolean }) => {
    try {
      const response = await loginUser({
        body: { username: values.email, password: values.password },
        rememberMe: values.remember,
      }).unwrap();
      localStorage.setItem('jwtToken', response.jwtToken);
      localStorage.setItem('role', response.role);
      console.log('Успешная авторизация.');

      const route = roleRoutes.get(response.role) || '/';
      navigate(route, { replace: true });
    } catch (err) {
      setError('Ошибка авторизации. Проверьте свои данные.');
      console.error(err);
    }
  };

  return (
    <div>
      <AuthForm onFinish={handleLogin} />
      {error && <p style={{ color: 'red', fontSize: '1.5rem', textAlign: 'center', marginTop: '30px' }}>{error}</p>}
    </div>
  );
};

export default AuthProcess;
