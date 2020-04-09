const http = require('http');
const path = require('path');

const shopRoutes = require(`./routes/shop`);
const adminData = require(`./routes/admin`);
const errorRoutes = require(`./routes/errors`);

const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.set(`view engine`, `pug`);
app.set(`views`, `views`);

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./views/public')));

app.use(`/admin`,adminData.routes);
app.use(shopRoutes);
app.use(errorRoutes);

app.listen(3000);
