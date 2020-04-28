const siteName = require(`../app`);
const adminData = require(`./admin`);

const Product = require(`../models/product`);

exports.getShop = (req, res, next) =>  {
    let products = Product.fetchAll((products) =>
    {
       return res.render(`shop/product-list`, {
            prods: products, 
            docTitle: `Shop`, 
            siteName: siteName.siteName, 
            path: `/`,
            cartNum: 0
        });
    })
};

exports.getCart = (req, res, next) => {
    res.render(`shop/cart`,     
    {
        docTitle: `Shop`, 
        siteName: siteName.siteName, 
        path: `/cart`,
        cartNum: 0
    })

};

exports.getProducts = (req, res, next) => {
    let products = Product.fetchAll((products) =>
    {
       return res.render(`shop/product-list`, {
            prods: products, 
            docTitle: `All products`, 
            siteName: siteName.siteName, 
            path: `/product-list`,
            cartNum: 0
        });
    })
};

exports.getCheckout = (req,res,next) => {
    res.render(`shop/checkout`, 
    {
        docTitle: `Checkout`, 
        siteName: siteName.siteName, 
        path: `/checkout`,
        cartNum: 0
    })  
};

exports.getIndex = (req,res,next) => {
    let products = Product.fetchAll((products) =>
    {
       return res.render(`shop/index`, {
            prods: products, 
            docTitle: `Shop`, 
            siteName: siteName.siteName, 
            path: `/`,
            cartNum: 0
        });
    })
}

exports.getOrders = (req, res, next) => {
    res.render(`shop/orders`, 
    {
        docTitle: `Checkout`, 
        siteName: siteName.siteName, 
        path: `/checkout`,
        cartNum: 0
    })  
};