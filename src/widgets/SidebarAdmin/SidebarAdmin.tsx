import { Menu, ConfigProvider } from "antd";
import { Outlet } from 'react-router-dom';

import styles from './SidebarAdmin.module.scss';
import { dashboardItems } from "./constsItems";


const SidebarAdmin = () => {
    const auth = localStorage.getItem('role');

    if(auth === 'ADMIN') {
        return (
           <div className={styles.dashboard}>
                <ConfigProvider
                    theme={{
                        components: {
                         Menu: {
                          itemHoverColor: 'rgb(150, 150, 244)'
                                },
                                    },
                           }}
                >
                    <Menu mode="vertical" theme="light" className={styles.dashboard__menu} items={dashboardItems} disabledOverflow/>
                </ConfigProvider>
                <div className={styles.dashboard__content}>
                    <Outlet />
                </div>
           </div>
        );
    };

};

export default SidebarAdmin;
