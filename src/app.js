const express = require('express');
const methodOverride =  require('method-override');
const path = require('path');

const app = express();

const mainRoutes = require('./routes/main');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

app.listen(3000 || process.env.PORT, () => console.log('El servidor se ha iniciado correctamente.'));