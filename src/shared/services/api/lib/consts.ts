export const baseUrl =
  import.meta.env.DEV
    ? 'http://localhost:3001/api'
    : '/api'; // ⚠️ Только так!

export const pets = ['Кошки', 'Собаки', 'Птицы', 'Грызуны', 'Рептилии', 'Кролики', 'Хорьки'];
export const petsBlockCallDoc = 'Вызвать доктора на дом';
export const petsBlockWorkwAllTypes = 'Работаем со всеми видами животных';
