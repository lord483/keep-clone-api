const express = require("express");
const app = express();
const rootRoute = require("./routes/rootRoute.js");
const path = require("path");

// Setting up local Port number if not given in process.env.PORT
const port = process.env.PORT || 5000;
const envir = process.env.NODE_ENV || "devEnv";

// Basic middlewares to parse JSON data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", (req, res, next) => {
	req.query.type = req.query.type || "notes";
	next();
});

if (envir === "production") {
	app.use(express.static(path.join(__dirname, "public")));
}

app.use("/api", rootRoute);
// app.use("/api/trash", trash);

app.listen(port, () => {
	console.log(`server listening on port ${port} and environment is ${envir}`);
});
