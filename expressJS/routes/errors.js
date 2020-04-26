const express = require(`express`);

const errorRoute = require(`../controllers/errors`);
const router = express.Router();

//in case of error set status to 404 and serve the error404.html

router.use(errorRoute.getError);
module.exports = router;