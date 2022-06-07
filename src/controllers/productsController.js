const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {

    productCartEmpty: (req, res) => {
        res.render('./products/productCartEmpty');
    },

    productCartFull: (req, res) => {
        res.render('./products/productCartFull');
    },

    productDetail: (req, res) => {
        const id = req.params.id;

        const productSelection = products.filter(product => {
            return product.id == id;
        });

        const discountPrice = productSelection[0].price - ((productSelection[0].price * productSelection[0].discount) / 100);

        res.render('./products/productDetail', { productSelection: productSelection[0], discountPrice: discountPrice })
    },

    productList: (req, res) => {
        res.render ('./products/productList')
    },

    vistaAdministrador: (req, res) => {
        res.render('./products/vistaAdministrador')
    },

    agregarProducto: (req, res) => {
        res.render('./products/agregarProducto')
    }

}

module.exports = productsController;