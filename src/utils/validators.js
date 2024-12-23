const validateOrderInput = (order) => {
    if (!order.productName || typeof order.productName !== 'string') throw new Error('Invalid product name');
    if (!order.quantity || order.quantity <= 0 || !Number.isInteger(order.quantity)) throw new Error('Quantity must be a positive integer');
    if (!order.pricePerUnit || order.pricePerUnit <= 0) throw new Error('Price per unit must be a positive number');
};

module.exports = { validateOrderInput };
