const siteName = require(`../app`);

const Product = require(`../models/product`);

exports.getAddProduct = (req, res, next) =>  {
    res.render(`add-product`, {
        docTitle: `Add product`, 
        siteName: siteName.siteName, 
        path: `/admin/add-product`
        });
};

exports.postAddProduct = (req, res, next) =>  {
    if(req.body.title !== ''){
        const product = new Product(req.body.title);
        product.save();
        res.redirect(`/`);
    }
    res.redirect(`/admin/add-product`);
};
