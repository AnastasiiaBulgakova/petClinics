import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@shared/services/store/store';

import { MainRoutes } from './app';

import 'antd/dist/reset.css';
import './app/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={MainRoutes} />
  </Provider>
);
