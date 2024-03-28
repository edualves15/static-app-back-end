const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const privateItemController = require('../controllers/privateItemController');
const router = express.Router();

router.get('/privateItems', authMiddleware, privateItemController.getAllItems);
router.get('/privateItems/:id', authMiddleware, privateItemController.getItemById);

module.exports = router;
