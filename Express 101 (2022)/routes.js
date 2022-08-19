const router = require("express").Router();
const {
  homeController,
  aboutController,
  helpController,
} = require("./controller");

router.get("/", homeController);

router.get("/about", aboutController);

router.get("/help", helpController);

module.exports = router;
