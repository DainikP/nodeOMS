const { v4: uuidv4 } = require('uuid');

let orders = []; // In-memory database

const placeOrder = (req, res) => {
    try {
        const { productName, quantity, pricePerUnit } = req.body;

        // Validate input
        const { validateOrderInput } = require('../utils/validators');
        validateOrderInput({ productName, quantity, pricePerUnit });

        // Calculate total and apply discounts
        let total = quantity * pricePerUnit;
        if (total > 10000) total *= 0.9; // 10% discount
        if (quantity > 5) total -= 500; // Flat ₹500 discount

        const order = {
            orderId: uuidv4(),
            productName,
            quantity,
            pricePerUnit,
            total,
            timestamp: new Date(),
        };

        orders.push(order);

        console.log('Order placed:', order);
        
        res.status(201).json({ message: 'Order placed successfully', order });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const getOrderSummary = (req, res) => {
    const { id } = req.params;
    const order = orders.find(o => o.orderId === id);

    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.status(200).json(order);
};

const calculateTotalRevenue = (req, res) => {
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    res.status(200).json({ totalRevenue });
};

module.exports = { placeOrder, getOrderSummary, calculateTotalRevenue };
