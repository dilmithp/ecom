const Order = require('../models/Order');

const createOrder = async (req, res) => {
  const { customerName, email, paymentStatus, totalPrice } = req.body;
  try {
    const order = new Order({ customerName, email, paymentStatus, totalPrice });
    await order.save();
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = { createOrder };
