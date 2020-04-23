/*
Author: Seth Hager
Date: April 28th 2020

Goals:
Handle two routes "/" and "/users"

"/" route should have a form asking for a username

"/users" should display all the usernames inputted.


*/

// 3rd party dependencies
const express = require(`express`);             //Framework for nodejs
const ejs = require(`ejs`);                     //Templating engine
const bodyParser = require(`body-parser`);      //Parser for requests

//nodeJS libraries
const path =  require(`path`);

// Created dependencies
const indexRouter = require('./routes/index.js');
const userRouter = require(`./routes/users.js`);

//initializing expressJS app
const app = express();

//Setting templating engine
app.set(`view engine`, ejs.name);
app.set (`views`, `views`);

//Parse requests add object attributes to req.body from POST
app.use(bodyParser.urlencoded({extended:false}));

//Statically serve style files and required images
app.use(express.static(path.join(__dirname, `views/styles`)));

//User created Middleware
app.use(indexRouter.router);
app.use(userRouter);

app.listen(3000);