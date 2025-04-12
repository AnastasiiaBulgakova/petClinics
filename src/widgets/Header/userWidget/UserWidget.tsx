import { useState, useEffect, useRef } from 'react';
import { userUnauthorized } from '@shared/assets';

import styles from './styles/UserWidget.module.scss';

interface UserWidgetProps {
  role: string | undefined;
  avatarUrl: string | undefined;
  hasNotifications: boolean;
  onLogout: () => void;
}

const UserWidget = ({ role, avatarUrl, hasNotifications, onLogout }: UserWidgetProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userInfoRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
    userInfoRef.current && !userInfoRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleClickInside = (e: React.MouseEvent) => {
    if(isDropdownOpen && userInfoRef.current && userInfoRef.current.contains(e.target as Node)){
      setIsDropdownOpen(false);
    }
    else{
      toggleDropdown();
    }
  };
  return (
    <section className={styles.userWidget}>
      <div className={styles.notificationIconContainer}>
        <div className={styles.notificationIcon}>
          <span className={styles.bellIcon} />
          {hasNotifications && <div className={styles.notificationBadge} data-testid='notification-badge' />}
        </div>
      </div>
      <div className={styles.notificationSeparator}></div>
      <div
        className={styles.userInfo}
        onClick={handleClickInside}
        ref={userInfoRef}
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && toggleDropdown()}>
        <div className={styles.userInfo_role}>
          <span className={styles.userInfo_role_Label}>Role</span>
          <span className={styles.userInfo_role}>{role || 'undefined'}</span>
        </div>
       
        {isDropdownOpen && (
          <div className={styles.dropdownMenu} ref={dropdownRef}>
            <div className={styles.dropdownMenu_Item}>
              <span className={styles.dropdownMenu_Item_Profile}>Profile</span>
            </div>
            <button className={styles.dropdownMenu_Item}>
              <span className={styles.dropdownMenu_Item_LogOut} onClick={onLogout}>
                Выйти
              </span>
            </button>
          </div>
        )}

        <img src={avatarUrl || userUnauthorized} alt='User Avatar' className={styles.avatar} />
      </div>
    </section>
  );
};

export default UserWidget;
