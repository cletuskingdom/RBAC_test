const router = require("express").Router();

router.get("/login", async (req, res, next) => {
	res.send("The login page");
});

router.get("/register", async (req, res, next) => {
	res.send("The register page");
});

router.post("/login", async (req, res, next) => {
	res.send("The login post");
});

router.post("/register", async (req, res, next) => {
	res.send("The register post");
});

router.get("/logout", async (req, res, next) => {
	res.send("The logout post");
});
module.exports = router;
