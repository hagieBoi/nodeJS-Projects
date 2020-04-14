const express = require(`express`);

const rootDir = require(`../util/path`);
const path = require(`path`);
const siteName = require(`../app`);
const router = express.Router();



//in case of error set status to 404 and serve the error404.html


console.log(path.join(__dirname, `..`, `error.png`));

router.use((req,res,next) => {
    res.status(404).render(`error404`, {docTitle: `Page not found.`, logo: siteName.siteName});
});

module.exports = router;