const siteName = require(`../app`);

const Product = require(`../models/product`);

exports.getAddProduct = (req, res, next) =>  {
    res.render(`admin/add-product`, {
        docTitle: `Add product`, 
        siteName: siteName.siteName, 
        path: `/admin/add-product`,
        cartNum: 0
        });
};

exports.postAddProduct = (req, res, next) =>  {
    
    if(req.body.title !== ''){
        const title = req.body.title;
        const imageURL = req.body.imageURL;
        const price = req.body.price;
        const descr = req.body.description;
        
        const product = new Product(title, imageURL, price, descr);
        product.save();
        res.redirect(`/`);
    } else {
    res.redirect(`/admin/add-product`);
    }
};

exports.getProducts = (req, res, next) => {
    let products = Product.fetchAll((products) =>
    {
       return res.render(`admin/products`, {
            prods: products, 
            docTitle: `Admin Products`, 
            siteName: siteName.siteName, 
            path: `/admin/products`,
            cartNum: 0
        });
    })
}