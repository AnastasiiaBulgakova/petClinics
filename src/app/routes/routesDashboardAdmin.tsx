import { RouteObject } from 'react-router-dom';

import Landing from '../../pages/Landing';

import Doctors from '@/pages/Admin/Doctors/Doctors';
import Notification from '@/pages/Admin/Notification/Notification';
import Users from '@/pages/Admin/Users/Users';
import Topic from '@/pages/Admin/Topic/Topic';
import Comments from '@/pages/Admin/Comments/Comments';
import Setting from '@/pages/Admin/Setting/Setting';
import Support from '@/pages/Admin/Support/Support';
import Privacy from '@/pages/Admin/Privacy/Privacy';

export const RoutesDashboardAdmin: RouteObject[] = [
    {
        path: 'dashboard',  
        children: [
            {
              path: 'home', 
              element: <Landing />,
            },
            {
              path: 'doctors',
              element: <Doctors />,
            },
            {
              path: 'notification',
              element: <Notification />,
            },
            {
              path: 'users',
              element: <Users />,
            },
            {
              path: 'topic',
              element: <Topic />,
            },
            {
              path: 'comments',
              element: <Comments />,
            },
            {
              path: 'setting',
              element: <Setting />,
            },
            {
              path: 'support',
              element: <Support />,
            },
            {
              path: 'privacy',
              element: <Privacy />,
            },
          ]
        },
      ];