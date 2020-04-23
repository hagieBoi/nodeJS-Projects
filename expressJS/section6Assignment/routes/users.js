//Third party dependency
const express = require(`express`);

//Initializing express router
const userRouter = express();

//Created dependency
const users = require(`./index`);

// Middleware for /users route
userRouter.get(`/users`, (req, res, next) => {
    // console.log(users.users);
    res.render(`users`, {users: users.users});

}
);

//Exporting userRouter object
module.exports = userRouter;