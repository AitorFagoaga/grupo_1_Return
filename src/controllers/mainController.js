const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {

    index: (req, res) => {
        const productsOnSale = products.filter(product => {
            return product.category == 'On Sale';
        })

        const productsTrending = products.filter(product => {
            return product.category == 'Trending';
        })

        res.render('./index', {productsOnSale: productsOnSale, productsTrending: productsTrending});
    }

}

module.exports = mainController;