export const baseUrl =
  import.meta.env.DEV
    ? 'http://localhost:3001/api'
    : import.meta.env.VITE_API_URL;
export const pets = ['Кошки', 'Собаки', 'Птицы', 'Грызуны', 'Рептилии', 'Кролики', 'Хорьки'];
export const petsBlockCallDoc = 'Вызвать доктора на дом';
export const petsBlockWorkwAllTypes = 'Работаем со всеми видами животных';
