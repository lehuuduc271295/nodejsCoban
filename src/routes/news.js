const express = require("express");
const router = express.Router();
const db = require("../models/MyModel");
const newsController = require("../app/controllers/NewsController");

router.use("/new/:slug", newsController.getShow);
router.use("/new", newsController.getNew);
router.use("/search/:slug", newsController.getShow);
router.use("/search", newsController.getSearch);
router.use("/", newsController.getShow);

module.exports = router;
