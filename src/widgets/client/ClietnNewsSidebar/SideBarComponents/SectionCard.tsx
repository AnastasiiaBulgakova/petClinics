import ItemCard from '@widgets/client/ClietnNewsSidebar/SideBarComponents/ItemCard.tsx';

import style from '../ClientNewsSidebar.module.scss';

const SectionCard = ({ type }: { type: string }) => {
  return (
    <section className={`${style.sidebar__section} ${style.section}`}>
      <h2 className={style.section__title}>{type}</h2>
      <ul className={style.section__list}>
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </ul>
      <button className={style.section__button}>Показать больше</button>
    </section>
  );
};

export default SectionCard;
