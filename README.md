
# Kanban Backend

Backend часть web-приложения для управления задачами Kanban.

## Описание проекта

Backend реализует REST API для взаимодействия с frontend частью приложения.

Сервер отвечает за:
- получение проектов;
- создание проектов;
- удаление проектов;
- получение задач;
- изменение статусов задач;
- взаимодействие с базой данных PostgreSQL.

---

## Используемые технологии

- Node.js
- Express.js
- PostgreSQL
- pg
- dotenv
- cors

---

## Структура проекта


src/
 ├── routes/
 ├── db/
 ├── server.js
 └── .env
REST API
Проекты
Получение проектов
GET /api/projects
Создание проекта
POST /api/projects
Удаление проекта
DELETE /api/projects/:id
Задачи
Получение задач
GET /api/tasks
Создание задачи
POST /api/tasks
Обновление статуса задачи
PUT /api/tasks/:id
База данных

В качестве системы хранения данных используется PostgreSQL.

Основные таблицы:

projects
tasks
Установка проекта
1. Клонирование репозитория
git clone https://github.com/USERNAME/backend-repository.git
2. Переход в папку проекта
cd backend-project
3. Установка зависимостей
npm install
4. Создание .env файла
PORT=3000
DATABASE_URL=your_postgresql_url
5. Запуск сервера
npm start
Deploy

Backend приложение размещено на платформе Render.
