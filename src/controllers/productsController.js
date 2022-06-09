const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// Agregando funcionalidad clase 23
const archivoRuta= path.join(__dirname, '../data/products.json');
const dataProudctos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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

    vistaAgregarProducto: (req, res) => {
        res.render('./products/agregarProducto')
    },
    agregarProducto: (req, res) => {
        var newProduct = {
            id: dataProudctos[dataProudctos.length - 1].id+1,
            titulo: req.body.titulo
            }
            
            dataProudctos.push(newProduct);
            fs.writeFileSync(archivoRuta, JSON.stringify(dataProudctos, null, 2));
        res.redirect('/products/productList')
    }

}

module.exports = productsController;