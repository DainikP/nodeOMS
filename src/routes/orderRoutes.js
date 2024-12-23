const express = require('express');
const router = express.Router();
const { placeOrder, getOrderSummary, calculateTotalRevenue } = require('../controllers/orderController');

router.post('/orders', placeOrder);
router.get('/orders/:id', getOrderSummary);
router.get('/revenue', calculateTotalRevenue);

module.exports = router;
