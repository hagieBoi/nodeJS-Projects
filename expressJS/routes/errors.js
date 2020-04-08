const express = require(`express`);

const rootDir = require(`../util/path`);
const path = require(`path`);
const router = express.Router();

router.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootDir, `views`, `error404.html`));
});

module.exports = router;  
