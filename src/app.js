const express = require("express");
const methodOverride = require("method-override");
const path = require("path");
const session = require("express-session");
const cookie = require("cookie-parser");
require("dotenv").config();
//middlewares de aplicacion
//const onlyUsersMiddleware = require("./middlewares/onlyUsersMiddleware");
const Session = require("./middlewares/session");
//const adminMiddleware = require("./middlewares/adminMiddleware");

const app = express();

app.use(
  session({
    secret: "Secreto",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cookie());

app.use(Session);
//app.use(adminMiddleware);

const mainRoutes = require("./routes/main");
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
//ruta administrador
const adminRoutes = require("./routes/administrador");
const apiRouter = require("./routes/api");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));

app.use("/", mainRoutes);
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
//ruta administrador
app.use("/admin", adminRoutes);
app.use("/api/", apiRouter);

app.listen(3000 || process.env.PORT, () =>
  console.log("El servidor se ha iniciado correctamente.")
);
