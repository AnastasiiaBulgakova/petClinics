# Pet Clinic Project

## Поздравляю с переходом на этап учебного проекта

На данном этапе мы будем учиться работать и коммуницировать в команде во время разработки приложения. Вы должны быть максимально самостоятельными, или как минимум стремиться к этому!

- Общайтесь с коллегами (в том числе с бекенд-командой).
- Обсуждайте проблемы, делитесь опытом.
- На проекте вы должны быть самостоятельными и самодостаточными.

## Полезные ссылки

- **Макет проекта:** [Ссылка на Figma](https://www.figma.com/file/tWbPmporTclwA6sdPmra2l/Pet-Clinic?node-id=0%3A1&t=Ntcy4rG6SzMLJjBa-0)
- **Документация по API (Swagger):** [Ссылка на Swagger UI](http://91.241.64.154:8080/swagger-ui/index.html?configUrl=%2Fv3%2Fapi-docs%2Fswagger-config&urls.primaryName=all%20controllers)

## Тестовые учетные записи

- Логин: `{role}{число от 1}@email.com`
- Пароль: `{role}`

Пример учетной записи для роли `client`:
Логин: `client1@email.com`  
Пароль: `client`

## Важные указания

1. **Проверяйте консоль на наличие ошибок.**
2. **Не исправляйте чужой код** в своей ветке, даже если заметили ошибку. Сообщите об этом лидеру проекта.
3. **Проверяйте файлы перед коммитом**, чтобы избежать попадания посторонних файлов (особенно это касается `package.json` и `package-lock.json`). Если лишние файлы всё же попали, откатите их:

   ```bash
   git checkout main 'путь_до_файла'
   пример git checkout main 'package-lock.json'
   ```

# Немного о проекте

Проект - **Вет Паспорт**, в котором можно вести учет здоровья, вакцин, приемов и прочего-прочего для питомцев пользователей. Также развивается функционал форума, отзывов о докторах и админка.

### Стек технологий

- React
- Redux / RTK Query
- TypeScript
- Jest
- react-hook-form
- Prettier / ESLint / Husky

При необходимости и желании вы можете подключить какую-либо библиотеку в процессе выполнения какой-нибудь задачи. Главное, чтобы в проекте не было подключений однотипных библиотек, чтобы не засорять и не нагружать проект.

Скорее всего, вы еще не работали с **Redux Toolkit** и **TypeScript**.  
Обязательно нужно изучить эти технологии: [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started) и [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html).

# Как мы работаем

Мы используем **GitLab** в качестве системы управления версиями.  
Кроме того, мы используем GitLab и для управления задачами. Для этого у нас есть доска задач:

- **Колонка "Open"** - задачи, которые находятся в процессе формирования, их брать не нужно.
- **Колонка "To do"** - общие задачи, можно брать самостоятельно, но не более одной за раз.
- **Колонка "In progress"** - задачи, над которыми в данный момент кто-то работает.
- **Колонка "Need First Review"** - выполненные задачи, которые должны проверяться двумя студентами. После каждой проверки необходимо поставить лайк или дизлайк. Если задача выполнена неверно, то необходимо перенести её в **In Progress**. Задача должна набрать 2 лайка для переноса в **Need Review**.
- **Колонка "Need Review"** - задачи, выполненные и проверенные, ожидают ревью ментора.
- **Колонка "Paused"** - задачи на паузе по причинам невозможности выполнения в данный момент времени.
- **Колонка "Closed"** - задачи, выполненные и прошедшие ревью.

Если есть необходимость в реализации функционала или исправления работы уже существующего на стороне сервера, опишите суть и как вы видите работу со стороны клиента, и отправьте это в чат бекенд-команде.

Вопросы, которые касаются бекенда, также адресуем в чат бекенд-команде.

Если у вас есть вопросы по реализации функционала, задавайте их в чате команды.

# Проверка кода

После того как вы закончили работу, необходимо проверить свой код. Для этого используйте команду:

```bash
npm run test
```

Если тесты пройдены успешно, вы можете отправить свой код на проверку.

# Работа с git

Основные команды:

```bash
git pull
git checkout your-branch-name
git add .
git commit -m "your commit message"
git push
```

# Как коммитить в репозиторий?

- **Атомарно.**
- Один коммит — одно изменение.
- Один Merge Request — одна задача.

Это два строгих правила, нарушение которых может превратить разработку в хаос.

Ветку создаём с префиксом номера карточки задачи (если создаёте через кнопку "Create merge request and branch" — префикс уже будет вписан заранее).

## Полезные ссылки по работе в команде

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)
- [Правила написания коммитов](https://chris.beams.io/posts/git-commit/)
- [GitFlow Workflow](https://www.atlassian.com/ru/git/tutorials/comparing-workflows/gitflow-workflow)

## Wiki Полезные ресурсы для Frontend разработчиков

- **CSS: Лучшие практики**:

  - [Пришло время попрощаться с единицей измерения px](https://habr.com/ru/companies/ruvds/articles/541506/)
  - [CSS Tricks](https://css-tricks.com/)
  - [MDN Web Docs: CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - [Smashing Magazine: CSS](https://www.smashingmagazine.com/guides/css/)
  - [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  - [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

- **React**:

  - [Официальная документация React](https://react.dev/learn)
  - [React Patterns](https://reactpatterns.com/)
  - [Awesome React](https://github.com/enaqx/awesome-react)

- **Redux / RTK Query**:

  - [Redux Toolkit: Getting Started](https://redux-toolkit.js.org/introduction/getting-started)
  - [RTK Query: Overview](https://redux-toolkit.js.org/rtk-query/overview)
  - [Redux Patterns](https://github.com/markerikson/redux-ecosystem-links)

- **TypeScript**:

  - [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
  - [TypeScript Deep Dive](https://github.com/etroynov/typescript-book/blob/master/SUMMARY.md)
  - [Awesome TypeScript](https://github.com/dzharii/awesome-typescript)

- **Тестирование с Jest**:

  - [Jest Documentation](https://jestjs.io/docs/getting-started)
  - [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

- **Формы с React Hook Form**:

  - [React Hook Form: Getting Started](https://react-hook-form.com/get-started)
  - [React Hook Form Examples](https://react-hook-form.com/get-started#Examples)

- **Кодстайл и линтинг**:
  - [Prettier Documentation](https://prettier.io/docs/en/index.html)
  - [ESLint Documentation](https://eslint.org/docs/user-guide/getting-started)
  - [Husky: Git Hooks](https://typicode.github.io/husky/#/)
