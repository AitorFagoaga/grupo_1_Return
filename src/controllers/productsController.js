const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// Agregando funcionalidad clase 23
const archivoRuta= path.join(__dirname, '../data/products.json');
const dataProudctos = JSON.parse(fs.readFileSync(archivoRuta, 'utf-8'));

const productsController = {

    productCartEmpty: (req, res) => {
        res.render('./products/productCartEmpty');
    },

    productCartFull: (req, res) => {
        res.render('./products/productCartFull');
    },

    productDetail: (req, res) => {
        const id = req.params.id;

        const productSelection = dataProudctos.filter(product => {
            return product.id == id;
        });

        const discountPrice = productSelection[0].price - ((productSelection[0].price * productSelection[0].discount) / 100);

        res.render('./products/productDetail', { productSelection: productSelection[0], discountPrice: discountPrice })
    },

    vistaAdministrador: (req, res) => {
        res.render('./products/vistaAdministrador')
    },

    vistaAgregarProducto: (req, res) => {
        res.render('./products/agregarProducto')
    },
    agregarProducto: (req, res) => {
        //importante : en la base de datos, el archivo debe contener el array vacio [], para iniciar.
        //dato por si la lista de la base de datos es vacia

        let idinicio=1;
        //sino es vacia entro al if

        
        if(dataProudctos.length != 0){
            var newProduct = {
                id: dataProudctos[dataProudctos.length - 1].id+1,
                titulo: req.body.titulo,
                imagen : req.file.filename,
            }
            
            
            dataProudctos.push(newProduct);
            fs.writeFileSync(archivoRuta, JSON.stringify(dataProudctos, null, 2));
            res.redirect('/products/productList')
        }
        //si es vacia entro al else y le asigno el idinicio=1 de arriba

        else{
            var newProduct = {
            id: idinicio,
            titulo: req.body.titulo,
            descripcion: req.body.descripcion,
            imagen : req.file.filename,
            }
            dataProudctos.push(newProduct);
            fs.writeFileSync(archivoRuta, JSON.stringify(dataProudctos, null, 2));
            res.redirect('/products/productList')
        }
    },

    productList: (req, res) => {
        res.render ('./products/productList', {dataProudctos:dataProudctos})
    },

    delete: (req,res) => {
        const id = req.params.id;
		let productDelete = dataProudctos.filter(prod => {return prod.id != id});
        fs.writeFileSync(archivoRuta, JSON.stringify(productDelete, null,  ' '));
        res.redirect ('/products/productList')
	}
    

}

module.exports = productsController;