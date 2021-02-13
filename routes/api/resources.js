const router = require("express").Router();
const resourcesController = require("../../controllers/resourcesController");

// "/api/resources"
router.route("/")
    .get(resourcesController.findAll)
    .post(resourcesController.create);

router.route("/search")
    .get(resourcesController.search)

// "/api/resources/:id"


module.exports = router;