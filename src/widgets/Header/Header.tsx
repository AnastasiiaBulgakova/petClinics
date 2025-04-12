import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';
import { Avatar, Button, Drawer, Menu } from 'antd';
import { logo } from '@shared/assets';

import UserWidget from './userWidget/UserWidget.tsx';
import { menuItems } from './constsItems.tsx';
import styles from './Header.module.scss';

import { useLogoutUserMutation } from '@/shared/services/api/auth/authentication.api.ts';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();
  const [logoutUser] = useLogoutUserMutation();

  const handleLogout = async () => {
    try {
      await logoutUser();
      console.log('Успешный выход');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    const role = localStorage.getItem('role');
    const avatarUrl = localStorage.getItem('avatarUrl');
    const hasNotifications = localStorage.getItem('hasNotifications');

    if (token && role) {
      setUser({ role, avatarUrl, hasNotifications });
    }
  }, []);

  const handleSignInClick = () => {
    navigate('/sign-in');
  };

  return (
    <header className={styles.header}>
      <Link to='/' className={styles.headerLogo_btn} title='Главная'>
        <img src={logo} className={styles.headerLogo_img} alt='logo' />
      </Link>

      <Menu mode='horizontal' theme='light' className={styles.menu} items={menuItems} disabledOverflow />

      {user ? (
        <UserWidget
          role={user.role}
          avatarUrl={user.avatarUrl}
          hasNotifications={user.hasNotifications}
          onLogout={handleLogout}
        />
      ) : (
        <>
          <div className={styles.actionButtons}>
            <Button type='primary' className={styles.signIn_btn} onClick={handleSignInClick}>
              Sign In
            </Button>
            <Button type='default' className={styles.register_btn}>
              Register
            </Button>
          </div>

          <Button type='primary' className={styles.account_btn} onClick={handleSignInClick}>
            Аккаунт
          </Button>
        </>
      )}

      <Button type='text' icon={<MenuOutlined />} onClick={toggleMobileMenu} className={styles.burgerMenu} />

      <Drawer
        title='Меню'
        placement='left'
        onClose={toggleMobileMenu}
        open={isMobileMenuOpen}
        rootClassName={styles.customDrawer}
        width={360}>
        <div className={styles.menu_MobileHeader}>
          <Button type='text' onClick={toggleMobileMenu} className={styles.closeMenu_btn}>
            Назад
          </Button>
          <Avatar size={100} className={styles.menu_MobileHeader_Avatar} alt='User Avatar' data-testid='user-avatar' />
          {user ? (
            <h1 className={styles.username}>ThePetOwner</h1>
          ) : (
            <Button
              type='primary'
              block
              size='large'
              className={styles.mobile_MenuSignIn_btn}
              onClick={handleSignInClick}
              data-testid='mobile-sign-in'>
              Sign In
            </Button>
          )}
        </div>
        <Menu mode='inline' theme='light' className={styles.menu_MobileNav} items={menuItems} inlineIndent={30} />
        {user ? (
          <span className={styles.logOut} onClick={handleLogout}>
            Выйти
          </span>
        ) : null}
      </Drawer>
    </header>
  );
}

export default Header;
