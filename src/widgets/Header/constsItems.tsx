import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';

export type MenuItem = Required<MenuProps>['items'][number];

export const menuItems: MenuItem[] = [
  {
    key: 'doctors',
    label: <Link to='/doctors'>Список докторов</Link>,
  },
  {
    key: 'procedures',
    label: <Link to='/procedures'>Список процедур</Link>,
  },
  {
    key: 'about-something',
    label: <Link to='/about-something'>О чем-нибудь</Link>,
  },
  {
    key: 'sausages',
    label: <Link to='/sausages'>Список сосисок</Link>,
  },
  {
    key: 'contacts',
    label: <Link to='/contacts'>Контакты</Link>,
  },
  {
    key: 'about',
    label: <Link to='/about'>О нас</Link>,
  },
  {
    key: 'forum',
    label: <Link to='/forum'>Форум</Link>,
  },
];
