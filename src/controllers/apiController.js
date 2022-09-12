const db = require("../database/models");

module.exports = {
  product: async function (req, res) {
    let product = await db.Products.findByPk(req.params.id);
    return res.json(product);
  },
  checkout: (req, res) => {
    // return res.send({ ...req.body, userId: req.session.userLogged.id });
    let order = db.Order.create(
      { ...req.body, userId: req.session.userLogged.id },
      {
        include: db.Order.OrderItems,
      }
    );
    res.json({ ok: true, status: 200, order: order });
  },
  lista: (req, res) => {
    db.User.findAll().then((personaje) => {
      let array = [];
      for (personajes in personaje) {
        array.push(" Nombre : " + personaje[personajes].name);
      }
      res.json(array);
    });
  },
  detalle: (req, res) => {
    db.User.findByPk(req.params.id).then(function (usuario) {
      res.json({
        detalle: "A continuacion los detalles del Usuario ",
        data: usuario,
      });
    });
  },
  listaProductos: (req, res) => {
    db.Products.findAll().then((personaje) => {
      let array = [];
      for (personajes in personaje) {
        array.push(
          "id : " + personaje[personajes].id
        );
      }
      res.json(array);
    });
  },
  detalleProductos: (req, res) => {
    db.Products.findByPk(req.params.id).then(function (product) {
      res.json({
        detalle: "A continuacion los detalles del Producto ",
        data: product,
      });
    });
  },
};
