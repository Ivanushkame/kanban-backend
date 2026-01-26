const Router = require('express');
const router = new Router();
const controller = require('../controllers/tasks.controller');

router.post('/', controller.createTask);
router.get('/project/:projectId', controller.getTasksByProject);
router.patch('/:taskId/status', controller.updateTaskStatus);

module.exports = router;