import { Typography } from 'antd';
import classnames from 'classnames';
import { dogForDescription } from '@shared/assets/index';

import { collapseText, data, historyText, subtitleText, titleText } from '../constants';

import styles from './Description.module.scss';

import { useTheme } from '@/features/theme/theme';

const Description = () => {
  const { Paragraph } = Typography;
  const { theme } = useTheme();

  const title = classnames(styles.description__title, styles[theme]);
  const subtitle = classnames(styles.description__subtitle, styles[`subtitle-${theme}`]);
  const history = classnames(styles.description__history, styles[`subtitle-${theme}`]);
  const collapse = classnames(styles.description__collapse, styles[`subtitle-${theme}`]);
  const boxTitle = classnames(styles.description__boxTitle, styles[`boxTitle-${theme}`]);
  const boxSubtitle = classnames(styles.description__boxSubtitle, styles[`subtitle-${theme}`]);

  return (
    <section className={styles.description}>
      <div className={styles.description__info}>
        <h2 className={title}>{titleText}</h2>
        <p className={subtitle}>{subtitleText}</p>
        <p className={history}>{historyText}</p>
        <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: 'Читать полностью' }} className={collapse}>
          {collapseText}
        </Paragraph>
        <div className={styles.description__statistic}>
          {data.map(item => {
            return (
              <div key={item.title} className={styles.description__box}>
                <span className={boxTitle}>{item.title}</span>
                <span className={boxSubtitle}>{item.subtitle}</span>
              </div>
            );
          })}
        </div>
      </div>
      <img src={dogForDescription} className={styles.description__img} />
    </section>
  );
};

export default Description;
