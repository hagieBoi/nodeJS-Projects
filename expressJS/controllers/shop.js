const siteName = require(`../app`);
const adminData = require(`./products`);

const Product = require(`../models/product`);

exports.getShop = (req, res, next) =>  {
    let products = Product.fetchAll((products) =>
    {
        res.render(`shop`, {
            prods: products, 
            docTitle: `Shop`, 
            siteName: siteName.siteName, 
            path: `/`});
    }
    )
};
