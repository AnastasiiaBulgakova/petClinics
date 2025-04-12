export const baseUrl = 
  process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3001/api'   // Локальный сервер для разработки
    : '/api';                       // Для Vercel и продакшн-серверов

export const pets = ['Кошки', 'Собаки', 'Птицы', 'Грызуны', 'Рептилии', 'Кролики', 'Хорьки'];
export const petsBlockCallDoc = 'Вызвать доктора на дом';
export const petsBlockWorkwAllTypes = 'Работаем со всеми видами животных';
