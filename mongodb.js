const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId; // This way you can create new ObjectID to your collections
require("dotenv").config();
const uri = process.env.KEEP_DB_URI; // Fetch your own MongoDB URI

// Suppress useNewUrlParser, useUnifiedTopology deprecation warnings

const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const main = async () => {
	try {
		await client.connect();
		console.log("connected to DB");
	} catch (error) {
		console.error(error);
	}
};

main().catch(() => console.log(error));

const getNotes = async (client, query, res) => {
	const note = await client.db("notesDB").collection("note").find(query);
	if (note) {
		// console.log(`note found with query ${JSON.stringify(query)}`);
		const result = await note.toArray();
		res.status(200).json(result);
	} else {
		console.log(`nothing found with query ${JSON.stringify(query)}`);
	}
};

const createUpdateNote = async (client, updateQuery, updateCreateNote, res) => {
	if (updateQuery.selectedId === "") {
		updateQuery.selectedId = new ObjectId();
	}
	const note = await client
		.db("notesDB")
		.collection("note")
		.updateOne(
			{ updateQuery },
			{ $set: { ...updateCreateNote } },
			{ upsert: true }
		);
	if (note) {
		res.status(200).json({ success: true });
	} else {
		console.log(`nothing found with query ${JSON.stringify(updateCreateNote)}`);
	}
};

// const listDatabases = async (client) => {
// 	const databasesList = await client.db().admin().listDatabases();
// 	console.log("Databases:");

// 	databasesList.databases.map((db) => {
// 		console.log(`- ${db.name}`);
// 	});
// };

module.exports = {
	client,
	getNotes,
	createUpdateNote,
};
