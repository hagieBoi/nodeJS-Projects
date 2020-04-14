const path = require('path');
const express = require(`express`);

const siteName = require(`../app`);
const rootDir = require(`../util/path`);
const adminData = require('./admin');


const router = express.Router();

router.get(`/`, (req, res, next) =>  {
    const products = adminData.products;
    res.render(`shop`, {prods: products, docTitle: `Shop`, logo: siteName.siteName});
});

module.exports = router;