const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');
const studentRoute = require('./student.route');
const lopRoute = require('./lop.route');
const appared_sizeRoute = require('./appared_size.route');
const productRoute = require('./product.route');
const product_categoriesRoute = require('./product_categories.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/students',
    route: studentRoute,
  },
  {
    path: '/classes',
    route: lopRoute,
  },
  {
    path: '/appared-size',
    route: appared_sizeRoute,
  },
  {
    path: '/product',
    route: productRoute,
  },
  {
    path: '/product-categories',
    route: product_categoriesRoute,
  }
  
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
