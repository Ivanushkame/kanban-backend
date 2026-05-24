require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const projects = [
  {
    id: 1,
    name: 'Учебный проект',
    description: 'Kanban система для курсовой работы',
  },
];

const tasks = [
  {
    id: 1,
    title: 'Создать frontend',
    description: 'Разработать интерфейс проекта',
    status: 'backlog',
    assignee: 'Иван',
    due_date: '2026-05-10',
    project_id: 1,
  },
  {
    id: 2,
    title: 'Подключить API',
    description: 'Связать frontend и backend',
    status: 'in_progress',
    assignee: 'Иван',
    due_date: '2026-06-01',
    project_id: 1,
  },
  {
    id: 3,
    title: 'Тестирование',
    description: 'Проверить работу системы',
    status: 'review',
    assignee: 'Алексей',
    due_date: '2026-05-01',
    project_id: 1,
  },
];

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
});