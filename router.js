const { Router } = require('express');
const PostController = require('./PostController');

const router = Router();

router.get('/posts', PostController.getAll);
router.get('/posts/:id', PostController.getOne);
router.post('/posts', PostController.create);
router.put('/posts', PostController.update);
router.delete('/posts/:id', PostController.delete);

module.exports = router;
