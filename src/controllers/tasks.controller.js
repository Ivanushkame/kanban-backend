const Task = require('../models/task.model');

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.getAll();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

exports.getTasksByProject = async (req, res) => {
  try {
    const tasks = await Task.getByProject(req.params.projectId);
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

exports.updateTaskStatus = async (req, res) => {
  try {
    const task = await Task.updateStatus(
      req.params.taskId,
      req.body.status
    );

    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};