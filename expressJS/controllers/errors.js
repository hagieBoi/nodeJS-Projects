const siteName = require(`../app`);

exports.getError = (req,res,next) => {
    
    res.status(404).render(`error404`, {
        docTitle: `Page not found.`, 
        siteName: siteName.siteName, 
        path: null});
    };
