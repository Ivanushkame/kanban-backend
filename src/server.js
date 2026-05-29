require('dotenv').config();

const express = require('express');
const cors = require('cors');

const projectsRouter = require('./routes/projects.routes');
const tasksRouter = require('./routes/tasks.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/projects', projectsRouter);
app.use('/api/tasks', tasksRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    'Server started on port ' + PORT
  );
});