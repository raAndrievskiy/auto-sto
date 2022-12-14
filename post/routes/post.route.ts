const express = require('express')
const router = express.Router();
const controllers = require('../controllers/post.controller.ts')

router.get('/all-posts', controllers.getAll)
router.get('/post', controllers.getPostById)

module.exports = router;
