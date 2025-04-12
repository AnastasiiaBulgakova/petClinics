import { Outlet } from 'react-router-dom';

const Manager = () => {
  return (
    <div>
      <h2>Менеджер-панель</h2>
      <Outlet />
    </div>
  );
};

export default Manager;
