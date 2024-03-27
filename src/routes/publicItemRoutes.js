const express = require('express');
const postController = require('../controllers/publicItemController');
const router = express.Router();

router.get('/publicItems', postController.getAllItems);
router.get('/publicItems/:id', postController.getItemById);

module.exports = router;
