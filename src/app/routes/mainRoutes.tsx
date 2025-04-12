import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Landing from '../../pages/Landing';

import ProtectedRoute from './ProtectedRoute';
import { RoutesDashboardAdmin } from './routesDashboardAdmin';

import SignIn from '@/pages/SignIn';
import { Admin, Client, Doctor, Forum, Manager, Profile } from '@/pages';
import { RoleType } from '@/shared/services/types/mainTypes';

export const MainRoutes = createBrowserRouter([
  {
    errorElement: <div>Страница не найдена!</div>,
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'forum',
        element: <Forum />,
        children: [
          {
            path: 'topic',
            element: <h3>Страничка c topic</h3>,
          },
        ],
      },
      {
        path: 'admin',
        element: (
          <ProtectedRoute requiredRole={RoleType.ADMIN}>
            <Admin/>
          </ProtectedRoute>
        ),
        children: [
          {
            path: '',
            element: <div>admin panel</div>
          },
          ...RoutesDashboardAdmin
        ],
      },
      {
        path: 'client',
        element: (
          <ProtectedRoute requiredRole={RoleType.CLIENT}>
            <Client />
          </ProtectedRoute>
        ),
        children: [
          {
            path: 'profile',
            element: <h3>Страничка c профилем</h3>,
          },
        ],
      },
      {
        path: 'doctor',
        element: (
          <ProtectedRoute requiredRole={RoleType.DOCTOR}>
            <Doctor />
          </ProtectedRoute>
        ),
        children: [
          {
            path: 'schedule',
            element: <h3>Страничка c расписанием</h3>,
          },
        ],
      },
      {
        path: 'manager',
        element: (
          <ProtectedRoute requiredRole={RoleType.MANAGER}>
            <Manager />
          </ProtectedRoute>
        ),
        children: [
          {
            path: 'reports',
            element: <h3>Страничка c отчетами</h3>,
          },
        ],
      },
      {
        path: 'user',
        children: [
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);
