import Button from '@shared/ui/button/Button';
import avatar from '@shared/assets/images/avatar-template.png';

import style from './PetSidebar.module.scss';

export const childrenItem = (
  <div className={style.containerChildren}>
    <Button
      className={`${style.button} ${style.buttonBlue}`}
      children='Редактировать'
      onClick={() => console.log('Редактировать петомца')}
    />
    <Button
      className={`${style.button} ${style.buttonRed}`}
      children='Удалить'
      onClick={() => console.log('Удалить петомца')}
    />
  </div>
);

export const genExtra = (img = avatar) => {
  return <img src={img} alt='аватар' className={style.avatar} />;
};