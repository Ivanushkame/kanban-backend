const Task = require('../models/task.model');

exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
};

exports.getTasksByProject = async (req, res) => {
  const tasks = await Task.getByProject(req.params.projectId);
  res.json(tasks);
};

exports.updateTaskStatus = async (req, res) => {
  const task = await Task.updateStatus(req.params.taskId, req.body.status);
  res.json(task);
};