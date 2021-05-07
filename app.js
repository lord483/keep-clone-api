const express = require("express");
const app = express();
const rootRoute = require("./routes/rootRoute.js");
const trash = require("./routes/trash.js");
const allowCORS = require("./cors");
require("dotenv").config();

const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId; // This way you can create new ObjectID to your collections
const uri = process.env.KEEP_DB_URI; // Fetch your own MongoDB URI

// Suppress useNewUrlParser, useUnifiedTopology deprecation warnings
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Setting up local Port number if not given in process.env.PORT
const port = 5000;

// Basic middlewares to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.all("*", allowCORS);

// Seperate routes middlewares
app.use("/api", rootRoute);
app.use("/api/trash", trash);

// MongoDB collections goes here
let mainCollection = "";
let trashCollection = "";
let tagsCollection = "";

client.connect((err) => {
	if (err) {
		console.log(err);
	} else {
		mainCollection = client.db("notesDB").collection("note");
		trashCollection = client.db("notesDB").collection("trash");
		tagsCollection = client.db("notesDB").collection("tags");
		console.log("connected to DB");
		return mainCollection, trashCollection, tagsCollection;
	}
});

app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});

module.exports = {
	ObjectId,
	mainCollection,
	trashCollection,
	tagsCollection,
};

// deleteMany dynamic approach

// app.delete("/", (req, res) => {
//

// getting value of the delete filter's argument from body
// 	const values = req.body[1].items;
// getting value of the delete filter from body
// 	let key = req.body[0].value;

// 	if (!values) {
// 		res.send("please specify values to be deleted");
// 	} else {
// 		values.map((singleItem) => {
// 			const deleteObj = { [key]: singleItem };

// 			mainCollection
// 				.deleteMany(deleteObj)
// 				.then()
// 				.catch((error) => console.log(error));
// 		});
// 	}
// 	res.status(200).send("OK");
// });
