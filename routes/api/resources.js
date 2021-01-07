const router = require("express").Router();
const resourcesController = require("../../controllers/resourcesController");

// "/api/resources"
router.route("/")
    .get(resourcesController.findAll)
    .post(resourcesController.create);



// "/api/resources/:id"


module.exports = router;