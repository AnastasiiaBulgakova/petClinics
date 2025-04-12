import { DatePicker, Input } from 'antd';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';

import styles from './EditProfileForm.module.scss';

import { useTheme } from '@/features';
import { useUpdateUserProfileMutation } from '@/shared/services/api/user/userProfile.api';
import { avatarTemplate } from '@/shared/assets';

interface EditProfileFormProps {
  profile: {
    lastName: string;
    firstName: string;
    birthDate: string;
    discordId: string;
    telegramId: string;
    avatarUrl: string;
    discordNotify: boolean;
    emailNotify: boolean;
  };
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({
  profile = {
    lastName: 'Kurtis',
    firstName: 'Eleonora',
    avatarUrl: avatarTemplate,
    birthDate: '08.03.1995',
    discordId: '',
    telegramId: '',
    discordNotify: true,
    emailNotify: true,
  },
}) => {
  const [updateProfile] = useUpdateUserProfileMutation();
  const { theme } = useTheme();
  const [profileData, setProfileData] = useState(profile);
  const saveProfile = () => {
    return updateProfile(profileData);
  };
  useEffect(() => {
    setProfileData(prev => ({
      ...prev,
      avatarUrl: prev.avatarUrl || avatarTemplate,
    }));
  }, [profile]);
  console.log('profileData.avatarUrl:', profileData.avatarUrl);
  return (
    <div className={classNames(styles.main, styles[`main-${theme}`])}>
      <button className={classNames(styles['go-back-btn'], styles[`go-back-btn-${theme}`])}>Back</button>
      <img className={classNames(styles.profileAvatar, styles[`profileAvatar-${theme}`])} src={profileData.avatarUrl} />
      <a className={classNames(styles.changePassLink, styles[`changePassLink-${theme}`])} href='#'>
        Change password
      </a>
      <form
        className={styles.form}
        onSubmit={e => {
          e.preventDefault();
          saveProfile();
        }}>
        <div className={classNames(styles.main__form, styles[`main__form-${theme}`])}>
          <div className={styles.form__item}>
            <span>Last Name</span>
            <Input
              className={styles.antdEl}
              onChange={e => setProfileData({ ...profileData, lastName: e.target.value })}
              value={profileData.lastName}
              placeholder='Kurtis'
            />
          </div>
          <div className={styles.form__item}>
            <span>First Name</span>
            <Input
              className={styles.antdEl}
              onChange={e => setProfileData({ ...profileData, firstName: e.target.value })}
              value={profileData.firstName}
              placeholder='Eleonora'
            />
          </div>
          <div className={styles.form__item}>
            <span>Birth of Date</span>
            <DatePicker
              data-testid='DatePicker'
              className={styles.antdEl}
              onChange={e => setProfileData({ ...profileData, birthDate: e ? dayjs(e).format('YYYY-MM-DD') : '' })}
              value={
                profileData.birthDate && dayjs(profileData.birthDate, 'YYYY-MM-DD').isValid()
                  ? dayjs(profileData.birthDate, 'YYYY-MM-DD')
                  : null
              }
              name='date'
              format='DD.MM.YYYY'
              allowClear={false}
            />
          </div>
          <div className={styles.form__item}>
            <span>DiscordId</span>
            <Input
              className={styles.antdEl}
              onChange={e => setProfileData({ ...profileData, discordId: e.target.value })}
              value={profileData.discordId}
              placeholder='discordId1'
            />
          </div>
          <div className={styles.form__item}>
            <span>TelegramId</span>
            <Input
              className={styles.antdEl}
              onChange={e => setProfileData({ ...profileData, telegramId: e.target.value })}
              value={profileData.telegramId}
              placeholder='telegramId1'
            />
          </div>
          <div className={styles.form__item}>
            <span>AvatarUrl</span>
            <Input
              className={styles.antdEl}
              onChange={e => setProfileData({ ...profileData, avatarUrl: e.target.value })}
              value={profileData.avatarUrl}
              placeholder='avatarUrl1'
            />
          </div>
        </div>
        <button className={styles.saveBtn}>Save</button>
      </form>
    </div>
  );
};

export default EditProfileForm;
