const Product = require('../models/Product');

const getProducts = async (req, res) => {
  try {
    const product = await Product.findOne();
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = { getProducts };
