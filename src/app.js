const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/projects', require('./routes/projects.routes'));
app.use('/api/tasks', require('./routes/tasks.routes'));

module.exports = app;