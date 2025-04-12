import { Outlet } from 'react-router-dom';

const Doctor = () => {
  return (
    <div>
      <h2>Доктор-панель</h2>
      <Outlet />
    </div>
  );
};

export default Doctor;
