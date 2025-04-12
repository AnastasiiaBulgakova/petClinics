import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Contacts.module.scss';
import { services, companys, answers, socialIcons } from './contactsItems';

import { logo } from '@/shared/assets';
import { useTheme } from '@/features';

const Contacts = () => {
  const { theme } = useTheme();

  return (
    <section className={styles.contactsWrapper}>
      <ul className={styles.itemList}>
        <li className={classNames(styles.listSubtitle, styles[`listSubtitle-${theme}`])}>Услуги</li>
        {services.map(service => (
          <li key={service}>
            <Link to='/' className={styles.link}>
              {service}
            </Link>
          </li>
        ))}
      </ul>

      <ul className={`${styles.itemList} ${styles.company}`}>
        <li className={classNames(styles.listSubtitle, styles[`listSubtitle-${theme}`])}>Компания</li>
        {companys.map(company => (
          <li key={company}>
            <Link to='/' className={styles.link}>
              {company}
            </Link>
          </li>
        ))}
      </ul>

      <ul className={styles.itemList}>
        <li className={classNames(styles.listSubtitle, styles[`listSubtitle-${theme}`])}>Ответы на вопросы</li>
        {answers.map(answer => (
          <li key={answer}>
            <Link to='/' className={styles.link}>
              {answer}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.imageArea}>
        <img src={logo} alt='Logo' className={styles.logo} />

        <ul className={styles.socialIcons}>
          {socialIcons.map(icon => (
            <li key={icon.alt}>
              <Link to='/'>
                <img src={icon.src} alt={icon.alt} className={styles.icon} />
              </Link>
            </li>
          ))}
        </ul>

        <div className={classNames(styles.copyright, styles[`copyright-${theme}`])}>
          <p className={styles.noMarginBottom}>Положение о политике персональных данных</p>
          <p className={styles.noMarginBottom}> Все права защищены, Ветклиника {new Date().getFullYear()}</p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
