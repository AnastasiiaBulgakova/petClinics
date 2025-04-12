import { Typography, Tabs, Divider, ConfigProvider } from 'antd';
import classNames from 'classnames';
import { catService } from '@shared/assets/index';

import { items } from './constants';
import style from './Service.module.scss';

import Button from '@/shared/ui/button/Button';
import { useTheme } from '@/features/theme/theme';

const Service = () => {
  const { theme } = useTheme();
  const { Title, Paragraph } = Typography;

  const subTitle = classNames(style.service__subtitle, style[`service__subtitle-${theme}`]);

  const servicesTitle = classNames(style.service__servicesTitle, style[`service__serviceTitle-${theme}`]);

  const text = classNames(style.service__servicesDescription, style[`service__text-${theme}`]);

  const handleChangeTab = (id: string) => {
    console.log(`вкладка изменена ${id}`);
  };

  const handleClick = () => {
    console.log('Была нажата кнопка - Записаться на приём ');
  };

  return (
    <section className={style.service}>
      <Title level={2} className={style.service__title}>
        Услуги нашей клиники
      </Title>
      <Paragraph className={subTitle}>При каких симптомах нужно обратиться в наш ветеринарный центр</Paragraph>
      <div className={style.service__wrapper}>
        <ConfigProvider
          theme={{
            components: {
              Tabs: {
                cardBg: theme === 'light' ? 'white' : '#344756',
                colorBgContainer: theme === 'light' ? 'white' : '#344756',
                cardPadding: '1.25rem 2.45rem',
                itemSelectedColor: theme === 'light' ? '#000000' : '#FF4C2B',
                itemColor: theme === 'light' ? '#000000' : '#FF4C2B',
                cardGutter: 0,
              },
            },
            token: {
              colorBorderSecondary: '#656A6E',
              fontSize: 20,
              lineWidth: 3,
              margin: 0,
            },
          }}>
          <Tabs
            defaultActiveKey='1'
            type='editable-card'
            hideAdd
            onChange={id => handleChangeTab(id)}
            items={items.map((tab, i) => {
              const id = String(i + 1);
              const { label, icon } = tab;
              return {
                label,
                key: id,
                icon: <img src={icon} />,
                closable: false,
              };
            })}
          />
        </ConfigProvider>
        <div className={style.service__container}>
          <img className={style.service__img} src={catService} alt='кот на приёме у ветеринара' />
          <div className={style.service__services}>
            <h3 className={servicesTitle}>Терапия</h3>
            <p className={text}>Ваш питомец заболел или его поведение вызывает у Вас тревогу</p>
            <p className={text}>Нужна консультация по содержанию и кормлению</p>
            <p className={text}>Подошла пора вакцинации</p>
            <Button onClick={handleClick} className={style.service__button}>
              Записаться на приём
            </Button>
          </div>
        </div>
      </div>
      <Divider className={style.service__divider} />
    </section>
  );
};

export default Service;
