const http = require('http');

const shopRoutes = require(`./routes/shop`);
const adminRoutes = require(`./routes/admin`);
const errorRoutes = require(`./routes/errors`);

const bodyParser = require('body-parser');
const path = require('path');

const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./views/public')));

app.use(`/admin`,adminRoutes);
app.use(shopRoutes);
app.use(errorRoutes);

app.listen(3000);
