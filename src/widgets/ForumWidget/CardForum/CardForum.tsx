import React from 'react';
import { avatarTemplate } from '@shared/assets/index';
import { useMediaQuery } from 'react-responsive';
import { parseISO, format } from 'date-fns';

import style from './CardForum.module.scss';

import {calendarIcon} from '@/shared/assets/index';
import { TopicDTO } from '@/shared/services/api/user/topicDTO';

interface MyProps {
  item: TopicDTO;
}
const CardForum: React.FC<MyProps> = ({ item }): JSX.Element => {
  const isMobile = useMediaQuery({ maxWidth: 670 });

  const formateDateDesktop = (date: string): string => {
    const data = parseISO(date);
    return format(data, 'd MMMM yyyy, HH:mm');
  };
  const formateDateMobile = (date: string): string => {
    const data = parseISO(date);
    return format(data, 'd MMM yy, HH:mm');
  };
  return (
    <li className={style.card}>
      <div className={style.card__wrapper}>
        <div className={style.card__description}>
          <h2 className={style.card__title}>{item.title}</h2>
          <p className={style.card__text}>{item.content}</p>
        </div>
        <span className={style.card__separator}></span>
        <div className={style.card__user}>
          <img className={style.card__avatar} src={avatarTemplate} alt='аватар профиля' />
          <span className={style.card__userName}>{`${item.topicStarter.firstname} ${item.topicStarter.lastname}`}</span>
        </div>
        <span className={style.card__separator}></span>
        <div
          className={style.card__date}
          data-date={isMobile ? formateDateMobile(item.creationDate) : formateDateDesktop(item.creationDate)}>
            <img src={calendarIcon} alt='icon' className={style.card__icon}/>
          {isMobile ? formateDateMobile(item.creationDate) : formateDateDesktop(item.creationDate)}
        </div>
        <span className={style.card__separator}></span>
        <div className={style.card__commentCounter}>
          {item.commentDtoList.length}
        </div>
      </div>
    </li>
  );
};

export default CardForum;
