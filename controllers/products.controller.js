const products = require('../data/products.json');

const getProducts = (req, res) => {
    return res.json({
        success: true,
        total: products.length,
        data: products,
    });
}

module.exports = {
    getProducts
};
