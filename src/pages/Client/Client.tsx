import { Outlet } from 'react-router-dom';
import ClientNewsSidebar from '@widgets/client/ClietnNewsSidebar/ClientNewsSidebar.tsx';

import PetSidebar from '@/widgets/client/PetSidebar';

const Client = () => {

  return (
    <div>
      <h2>Клиент-панель</h2>
      <ClientNewsSidebar />
      <Outlet />
      <PetSidebar/>
    </div>
  );
};

export default Client;
