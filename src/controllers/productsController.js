const db = require("../database/models");
const { Op } = require("sequelize");
const { validationResult } = require("express-validator");

const productsController = {

  productCartEmpty: (req, res) => {
    return res.render("./products/productCartEmpty");
  },

  productDetail: (req, res) => {
    db.Products.findByPk(
      req.params.id).then(function (product) {
      res.render("./products/productDetail", { product: product });
    });
  },
  detalleProducto: (req, res) => {
    db.Products.findByPk(req.params.id).then(function (product) {
      res.render("./products/detalleProducto", { product: product });
    });
  },

  vistaAdministrador: (req, res) => {
    res.render("./products/vistaAdministrador");
  },

  vistaAgregarProducto: (req, res) => {
    res.render("./products/agregarProducto");
  },
  agregarProducto: (req, res) => {

    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("./products/agregarProducto", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    db.Products.create({
      name: req.body.name,
      price: req.body.price,
      image: req.file.filename,
      description: req.body.description,
      category:req.body.category,
      user_id: req.session.userLogged.id,
    });

    res.redirect("/products/productList");
  },
  productList: (req, res) => {
    db.Products.findAll({
      where: { user_id: req.session.userLogged.id },
    }).then(function (product) {
      res.render("./products/productList", {
        product: product
      });
    });

    //  db.Products.findAll().then(function (product) {
    //   res.render("./products/productList", {
    //    product: product,
    // });
    //});
  },
  delete: (req, res) => {
    db.Products.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.redirect("/products/productList");
  },
  edit: (req, res) => {
    db.Products.findByPk(req.params.id).then(function (product) {
      res.render("./products/editProducts", { product: product });
    });
  },
  editUpdate: (req, res) => {
    db.Products.update(
      {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    return res.redirect("/products/productList");
  },
  busquedaProductos: (req, res) => {
    db.Products.findAll({
      where: { name: { [Op.like]: "%" + req.query.search + "%" } },
    }).then((products) => {
      return res.render("./products/busquedaProductos", { products: products });
    });
  },

  

  consolas: (req, res) => {
    db.Products.findAll(
      {where: {category:"Consolas"}}
    ).then((products) => {
      return res.render("./products/consolas", { products: products });
    });
  },
  celulares: (req, res) => {
    db.Products.findAll(
      {where: {category:"Celulares"}}
    ).then((products) => {
      return res.render("./products/celulares", { products: products });
    });
  },
  computacion: (req, res) => {
    db.Products.findAll(
      {where: {category:"Computacion"}}
    ).then((products) => {
      return res.render("./products/computacion", { products: products });
    });
  },
  componentes: (req, res) => {
    db.Products.findAll(
      {where: {category:"Componentes"}}
    ).then((products) => {
      return res.render("./products/componentes", { products: products });
    });
  },



};

module.exports = productsController;
