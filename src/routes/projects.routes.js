const Router = require('express');
const router = new Router();

const controller = require('../controllers/projects.controller');

router.post('/', controller.createProject);
router.get('/', controller.getProjects);
router.delete('/:id', controller.deleteProject);

module.exports = router;