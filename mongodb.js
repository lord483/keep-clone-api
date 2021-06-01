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

const createNote = async (client, noteData, res) => {
	const note = await client
		.db("notesDB")
		.collection("note")
		.insertOne(noteData);
	if (note) {
		res.status(200).json({ success: true, insertedId: note.insertedId });
	} else {
		res.json({ success: false });
		console.log(note);
	}
};

const updateNote = async (client, updateQuery, updateData, res) => {
	const note = await client
		.db("notesDB")
		.collection("note")
		.updateOne(
			{ _id: ObjectId(updateQuery.selectedId) },
			{ $set: { ...updateData } }
		);

	if (note.modifiedCount > 0) {
		res.status(200).json({ success: true });
	} else {
		console.log(note);
		res.json({ success: true });
	}
};

const deleteNote = async (client, deleteQuery, res) => {
	const note = await client
		.db("notesDB")
		.collection("note")
		.deleteOne({ _id: ObjectId(deleteQuery.selectedId) });

	if (note) {
		return;
	} else {
		console.log(note);
	}
};

module.exports = {
	client,
	getNotes,
	createNote,
	updateNote,
	deleteNote,
};
