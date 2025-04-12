import { useEffect, useState } from 'react';

import styles from './ScrollToTopButton.module.scss';

const ScrollToTopButton = () => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const buttonClasses = `${styles.scrollToTopButton} ${isVisible ? styles.show : ''}`;

  return <button className={buttonClasses} onClick={scrollToTop}></button>;
};

export default ScrollToTopButton;
