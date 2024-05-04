const router = require("express").Router();

router.get("/", (req, res, next) => {
	res.render("welcome");
});
module.exports = router;
