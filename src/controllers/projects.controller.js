const Project = require('../models/project.model');

exports.createProject = async (req, res) => {
  try {
    const { name, description } = req.body;

    const project = await Project.create(
      name,
      description
    );

    res.json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.getAll();

    res.json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};