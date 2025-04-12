import classNames from 'classnames';
import { Pagination } from 'antd';
import { useState, FC } from 'react';

import style from './Forum.module.scss';
import CardForum from './CardForum/CardForum';

import { useTheme } from '@/features';
import { TopicDTO } from '@/shared/services/api/user/topicDTO';

interface MyProps {
  data: TopicDTO[];
}

const ForumWidget: FC<MyProps> = ({ data }): JSX.Element => {
  const { theme } = useTheme();
  const header = classNames(style.forum__header, style[`forum__headerTheme-${theme}`]);

  const body = classNames(style.forum__body, style[`forum__bodyTheme-${theme}`]);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const totalTopics = data.length;
  const currentData = data.slice(startIndex, startIndex + pageSize);

  return (
    <div className={style.forum}>
      <div className={header}>Forum</div>
      <div className={body}>
        <ul className={style.forum__list}>
          {currentData.map(item => (
            <CardForum item={item} key={item.id} />
          ))}
        </ul>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          align='center'
          total={totalTopics}
          onChange={page => setCurrentPage(page)}
          style={{
            marginTop: '20px',
          }}
        />
      </div>
    </div>
  );
};

export default ForumWidget;
