const client = require("../mongoClient");

const createNew = async (noteData) => {
	try {
		const note = await client
			.db("Notes")
			.collection("allNotes")
			.insertOne(noteData);
		return { success: true, insertedNote: note.ops[0] };
	} catch (error) {
		console.log("database/services/fetch.js\n", error);
		console.log(note);
		return { success: false };
	}
};

module.exports = createNew;
