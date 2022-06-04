const productsController = {

    productCartEmpty: (req, res) => {
        res.render('./products/productCartEmpty');
    },

    productCartFull: (req, res) => {
        res.render('./products/productCartFull');
    },

    productDetail: (req, res) => {
        res.render('./products/productDetail')
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