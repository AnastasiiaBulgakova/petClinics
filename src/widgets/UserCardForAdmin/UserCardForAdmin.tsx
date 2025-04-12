import styles from './UserCardForAdmin.module.scss';

import { useTheme } from '@/features';

const UserCardForAdmin = () => {
  const { theme } = useTheme();
  return (
    <article className={styles.profileCard} data-theme={theme}>
      <div className={styles.profileLeft}>
        <figure className={styles.profileImage}>
          <img
            alt='Profile picture'
            src='https://storage.googleapis.com/a1aa/image/ZYXVmM665lh_s3YSm2McR7AYDbHOOqNRg1r8JnpE1Rg.jpg'
          />
        </figure>
        <div className={styles.notificationStatus}>
          <span>Статус уведомлений:</span>
          <div className={styles.statusContainer}>
            <div className={styles.statusItem}>
              <div className={`${styles.statusDot} ${styles.discord}`}></div>
              <span>Discord</span>
            </div>
            <div className={styles.statusItem}>
              <div className={`${styles.statusDot} ${styles.email}`}></div>
              <span>Email</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profileInfo}>
        <header className={styles.profileHeader}>
          <h2>Maria Ivanova</h2>
          <div className={styles.buttons}>
            <button className={styles.edit}>Edit</button>
            <button className={`${styles.view} ${styles.button}`}>View</button>
          </div>
        </header>
        <div className={styles.details}>
          <div>
            <span>Email</span>
            <a href='mailto:client1@email.com'>client1@email.com</a>
          </div>
          <div>
            <span>Role</span>
            <span>client</span>
          </div>
          <div>
            <span>Birthday</span>
            <span>2000-11-14</span>
          </div>
          <div>
            <span>DiscordId</span>
            <span>discordId1</span>
          </div>
          <div>
            <span>TelegramId</span>
            <span>telegramId1</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default UserCardForAdmin;
