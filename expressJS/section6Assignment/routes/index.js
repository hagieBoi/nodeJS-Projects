//Third party dependencies
const express = require(`express`);

//Initializing express Router and binding it to indexRouter
const indexRouter = express.Router();

//Constant Declaration
const users = [];

// Route if get method is used for '/'
indexRouter.get('/', (req, res, next) => {
    res.render(`index`);
});

// What to do with POST data.
indexRouter.post(`/`, (req, res, next) => {
    
    if (req.body.username !== ""){
        users.push({username: req.body.username});
    }

    res.redirect(`/users`);

})

// Exporting router and users array
module.exports = 
    {router : indexRouter,
    users : users
    };
