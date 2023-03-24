const express = require('express');
const router = express.Router();


const postsController = require('../controllers/postController');

router.post('/create', postsController.create);
router.get('/destroy/:id', postsController.destroy);

module.exports = router;