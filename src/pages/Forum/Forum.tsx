import { Outlet } from 'react-router-dom';
import { FC } from 'react';

import ForumWidget from '@/widgets/ForumWidget/ForumWidget';
import { useGetAllTopicsQuery } from '@/shared/services/api/user/topic.api';

const Forum: FC = () => {
  const { data = [] } = useGetAllTopicsQuery();
  
  return (
    <div>
      <h2>Форум-панель</h2>
      <Outlet />
      <ForumWidget data={data} />
    </div>
  );
};

export default Forum;
