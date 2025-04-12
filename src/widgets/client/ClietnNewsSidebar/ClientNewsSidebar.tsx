import { useEffect, useState } from 'react';
import SectionCard from '@widgets/client/ClietnNewsSidebar/SideBarComponents/SectionCard.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import style from './ClientNewsSidebar.module.scss';

import { useTheme } from '@/features';
import 'swiper/css';

const ClientNewsSidebar = () => {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 834);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 834);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <aside className={style.sidebar} data-theme={theme}>
      {isMobile ? (
        <Swiper
          spaceBetween={11}
          slidesPerView='auto'
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            360: {
              slidesPerView: 1,
            },
            834: {
              slidesPerView: 2,
            },
          }}>
          <SwiperSlide>
            <SectionCard type='Новости' />
          </SwiperSlide>
          <SwiperSlide>
            <SectionCard type='Акции' />
          </SwiperSlide>
          <SwiperSlide>
            <SectionCard type='Скидки' />
          </SwiperSlide>
        </Swiper>
      ) : (
        <>
          <SectionCard type='Новости' />
          <SectionCard type='Акции' />
          <SectionCard type='Скидки' />
        </>
      )}
    </aside>
  );
};

export default ClientNewsSidebar;
