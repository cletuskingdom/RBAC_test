const express = require("express");
const createHttpErrors = require("http-errors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(express.static("public"));

// routes
app.use("/", require("./routes/index.route"));
app.use("/auth", require("./routes/auth.route"));
app.use("/user", require("./routes/user.route"));

// ? handle error
app.use((req, res, next) => {
	next(createHttpErrors.NotFound());
});
app.use((error, req, res, next) => {
	error.status = error.status || 500;
	res.status(error.status);
	res.send(error);
});

const PORT = process.env.PORT || 4000;

mongoose
	.connect(process.env.MONGO_URL, {
		dbName: process.env.DB_NAME,
	})
	.then(() => {
		console.log("💾 is connected...");
		app.listen(PORT, () =>
			console.log(`Server is running  on http://localhost:${PORT} 🚀`)
		);
	})
	.catch((err) => console.log(err.message));
