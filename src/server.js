require('dotenv').config();

const express = require('express');
const cors = require('cors');

const projectRoutes = require('./routes/projects.routes');
const taskRoutes = require('./routes/tasks.routes');

const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://kanban-frontend-two-tau.vercel.app',
    ],
  })
);

app.use(express.json());

app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'Kanban API работает',
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});