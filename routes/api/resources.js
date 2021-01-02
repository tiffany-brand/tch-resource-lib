const router = require("express").Router();
const resourcesController = require("../../controllers/resourcesController");

// "/api/resources"
router.route("/")
    .get((req, res) => {
        res.send('This Works!');
    })



// "/api/resources/:id"


module.exports = router;