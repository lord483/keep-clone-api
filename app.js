const express = require("express");
const app = express();
require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
const uri = process.env.KEEP_DB_URI;
const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

app.get("/", (req, res) => {
	mainCollection
		.find({})
		.toArray()
		.then((result) => {
			res.status(200).send(result);
		})
		.catch((error) => console.log(error));
});

app.get("/trash", (req, res) => {
	trashCollection
		.find({})
		.toArray()
		.then((result) => {
			res.status(200).send(result);
		})
		.catch((error) => console.log(error));
});

app.post("/", (req, res) => {
	const newPost = req.body;

	mainCollection
		.insertOne(newPost)
		.then(() => {
			res.status(200).send(`new post added`);
		})
		.catch((error) => console.log(error));
});

app.post("/trash", (req, res) => {
	const newPost = req.body;

	trashCollection
		.insertOne(newPost)
		.then(() => {
			res.status(200).send(`new post added`);
		})
		.catch((error) => console.log(error));
});

app.put("/", (req, res) => {
	const newValue = req.body;

	if (!newValue.value) {
		res.send("empty values and/or keys");
	} else {
		for (let i = 0; i < newValue.value.length; i++) {
			const key = newValue.field[i];
			const value = newValue.value[i];
			mainCollection
				.updateOne(
					{ _id: ObjectId(newValue.id) },
					{ $set: { [key]: newValue.value } }
				)
				.then((result) => console.log(`${key.length} values updated`))
				.catch((error) => console.log(error));
		}
	}
	res.status(200).send(`updated`);
});

app.delete("/", (req, res) => {
	mainCollection
		.deleteOne({ _id: ObjectId(req.body.id) })
		.then((result) => {
			res.status(200).send(`deleted`);
		})
		.catch((error) => console.log(error));
});

app.delete("/trash", (req, res) => {
	trashCollection
		.deleteOne({ _id: ObjectId(req.body.id) })
		.then((result) => {
			res.status(200).send(`deleted`);
		})
		.catch((error) => console.log(error));
});

app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});

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
