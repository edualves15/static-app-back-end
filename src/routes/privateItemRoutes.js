const express = require('express');
const privateItemController = require('../controllers/privateItemController');
const router = express.Router();

router.get('/privateItems', privateItemController.getAllItems);
router.get('/privateItems/:id', privateItemController.getItemById);

module.exports = router;
