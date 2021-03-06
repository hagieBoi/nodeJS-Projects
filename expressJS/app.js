//global declarations
exports.siteName = `myWebsite`

//nodeJS provided dependencies
const http = require('http');
const path = require('path');

//created dependencies
const shopRoutes = require(`./routes/shop`);
const adminRoutes = require(`./routes/admin`);
const errorRoutes = require(`./routes/errors`);

//3rd party dependencies
const bodyParser = require('body-parser');
const express = require('express');
const ejs = require(`ejs`);

//initialize expressJS
const app = express();

//initialize templating engine
app.set(`view engine`, ejs.name);
app.set(`views`, `views`);

//parse requests
app.use(bodyParser.urlencoded({extended: false}));

//statically serve the CSS file
app.use(express.static(path.join(__dirname,'./views/public')));
app.use(express.static(path.join(__dirname, './views/images')));

//middleware routes
app.use(`/admin`,adminRoutes);
app.use(shopRoutes);
app.use(errorRoutes);

//listen on port 3000
app.listen(3000);
