const express = require('express');
const { createOrder } = require('../controllers/orderController');
const router = express.Router();

router.post('/pay', createOrder);

module.exports = router;
