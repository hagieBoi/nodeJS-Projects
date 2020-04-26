const path = require(`path`);

exports.p = path.join(path.dirname(process.mainModule.filename), 
`data`, 
`products.json`
);