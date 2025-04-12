import { type MenuProps } from 'antd';
import { Link } from 'react-router-dom';

import styles from './SidebarAdmin.module.scss';

import { iconHome, iconProfile, iconMsg, iconHistory, iconTasks, iconCommunities, iconSetting, iconSupport, iconPrivacy, dashboardLogo } from '@/shared/assets';

export type DashboardItem = Required<MenuProps>['items'][number];

export const dashboardItems: DashboardItem[] = [
    {
        key: 'dashboard',
        label:  (
            <Link to='/admin/dashboard' className={styles.dashboard__title}>
                <div className={styles.linkContainer}>
                    <img src={dashboardLogo} className={styles.image}/> 
                    <p>Dashboard</p>
                </div>
            </Link>
            ),
    },
    {
        key: 'home',
        label: (
            <Link to='/'>
                <div className={styles.linkContainer}>
                    <img src={iconHome} className={styles.image}/>
                    <p>Home</p>
                </div>    
            </Link>
            ),
    },
    {
        key: 'doctors',
        label: (
            <Link to='/admin/dashboard/doctors'>
                <div className={styles.linkContainer}>
                    <img src={iconProfile} className={styles.image}/> 
                    <p>Doctors</p>
                </div>
            </Link>
            ),
    },
    {
        key: 'notification',
        label: (
            <Link to='/admin/dashboard/notification'>
                <div className={styles.linkContainer}>
                    <img src={iconMsg} className={styles.image}/> 
                    <p>Notification</p>
                </div>
            </Link>
            ),
    },
    {
        key: 'users',
        label: (
            <Link to='/admin/dashboard/users'>
                <div className={styles.linkContainer}>
                    <img src={iconHistory} className={styles.image}/> 
                    <p>Users</p>
                </div>
            </Link>
            ),
    },
    {
        key: 'topic',
        label:(
            <Link to='/admin/dashboard/topic'>
                <div className={styles.linkContainer}>
                    <img src={iconTasks} className={styles.image}/> 
                    <p>Topic</p>
                </div>        
            </Link>
            ),
    },
    {
        key: 'comments',
        label: (
            <Link to='/admin/dashboard/comments'>
                <div className={styles.linkContainer}>
                    <img src={iconCommunities} className={styles.image}/> 
                    <p>Comments</p>
                </div>
            </Link>
            ),
    },
    {
        key: 'setting',
        label: (
            <Link to='/admin/dashboard/setting'>
                <div className={styles.linkContainer}>
                    <img src={iconSetting} className={styles.image}/> 
                    <p>Setting</p>
                </div>
            </Link>
            ),
    },
    {
        key: 'support',
        label: (
            <Link to='/admin/dashboard/support'>
                <div className={styles.linkContainer}>
                    <img src={iconSupport} className={styles.image}/> 
                    <p>Support</p>
                </div>
            </Link>
            ),
    },
    {
        key: 'privacy',
        label: (
            <Link to='/admin/dashboard/privacy'>
                <div className={styles.linkContainer}>
                    <img src={iconPrivacy} className={styles.image}/> 
                    <p>Privacy</p>
                </div>
            </Link>
            ),
    },
];
