const db = require("../database/models");
const { Op } = require("sequelize");

const productsController = {
  productCartEmpty: (req, res) => {
    res.render("./products/productCartEmpty");
  },

  productCartFull: (req, res) => {
    res.render("./products/productCartFull");
  },

  productDetail: (req, res) => {
    db.Products.findByPk(req.params.id).then(function (product) {
      res.render("./products/productDetail", { product: product });
    });
  },

  vistaAdministrador: (req, res) => {
    res.render("./products/vistaAdministrador");
  },

  vistaAgregarProducto: (req, res) => {
    res.render("./products/agregarProducto");
  },
  agregarProducto: (req, res) => {
    db.Products.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      image: req.file.filename,
      user_id: req.session.userLogged.id,
    });
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("./products/agregarProducto", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    res.redirect("/products/productList");
  },
  productList: (req, res) => {
    db.Products.findAll({
      where: { user_id: req.session.userLogged.id },
    }).then(function (product) {
      res.render("./products/productList", {
        product: product,
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
      where: { name: { [Op.like]: "%" + req.body.search } },
    }).then((movies) => {
      return console.log(req.params.search);
    });
    console.log(`?search=${req.body.search}`);
    return res.render("./products/busquedaProductos");
  },
};

module.exports = productsController;
