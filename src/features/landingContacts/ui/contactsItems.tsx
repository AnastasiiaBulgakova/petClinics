import { facebookLogo, twitterLogo, vkLogo, whatsappLogo } from '@/shared/assets';

export const services: string[] = [
  'Косметические операции',
  'Лечение переломов',
  'Вызов доктора',
  'Стационар',
  'Дерматология',
  'Диагностика',
];

export const companys: string[] = ['Специалисты', 'Клиники', 'Лицензии', 'Отзывы', 'Акции', 'Контакты', 'Вакансии'];

export const answers: string[] = ['Статьи', 'Специалисты', 'Карта сайта', 'Подписаться на рассылку'];

interface SocialIcon {
  src: string;
  alt: string;
}

export const socialIcons: SocialIcon[] = [
  { src: vkLogo, alt: 'vk' },
  { src: twitterLogo, alt: 'twitter' },
  { src: facebookLogo, alt: 'facebook' },
  { src: whatsappLogo, alt: 'whatsapp' },
];
