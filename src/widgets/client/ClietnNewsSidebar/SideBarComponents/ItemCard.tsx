import style from '../ClientNewsSidebar.module.scss';

const ItemCard = () => {
  const testImg = 'https://crosti.ru/patterns/00/2a/3a/8d_thumbnail_b1e7842d.jpg';
  return (
    <li className={`${style.section__item} ${style.item}`}>
      <img className={style.item__img} src={testImg} alt='#' />
      <div className={style.item__content}>
        <h3 className={style.item__title}>Тестовый Подзаголовок</h3>
        <p>
          Тестовый текст.Тестовый текст.Тестовый текст.Тестовый текст.Тестовый текст.Тестовый текст. Тестовый
          текст.Тестовый текст.Тестовый текст.Тестовый текст.Тестовый текст.Тестовый текст.Тестовый текст.
        </p>
      </div>
    </li>
  );
};

export default ItemCard;
