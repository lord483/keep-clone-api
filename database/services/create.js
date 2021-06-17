const client = require("../../mongoClient");

const createNew = async (noteData, pathParam) => {
	try {
		const note = await client
			.db("notesDB")
			.collection(pathParam)
			.insertOne(noteData);
		if (note) {
			return { success: true, insertedId: note.insertedId };
		} else {
			console.log(note);
			return { success: false };
		}
	} catch (error) {
		console.log("database/services/fetch.js\n", error);
	}
};

module.exports = createNew;
