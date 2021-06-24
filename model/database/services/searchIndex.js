const client = require("../mongoClient");

const searchIndex = async () => {
	try {
		const note = await client
			.db("Notes")
			.collection("allNotes")
			.createIndex({ title: "text", detail: "text" });
		console.log(note);
		// return await note.toArray();
	} catch (error) {
		console.log("database/services/fetch.js\n", error);
	}
};

module.exports = searchIndex;
