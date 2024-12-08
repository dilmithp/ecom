const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: String,
  email: String,
  paymentStatus: String,
  totalPrice: Number,
});

module.exports = mongoose.model('Order', orderSchema);
