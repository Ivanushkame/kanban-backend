const Project = require('../models/project.model');

exports.createProject = async (req, res) => {
  const { name, description } = req.body;
  const project = await Project.create(name, description);
  res.json(project);
};

exports.getProjects = async (req, res) => {
  const projects = await Project.getAll();
  res.json(projects);
};