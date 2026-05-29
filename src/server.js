require('dotenv').config();

const express = require('express');
const cors = require('cors');

const projectRoutes = require('./routes/projects.routes');

const app = express();

app.use(cors({
  origin: "https://kanban-frontend-two-tau.vercel.app"
}));

app.use(express.json());

app.use('/api/projects', projectRoutes);

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
];

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
});