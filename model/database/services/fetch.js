const client = require("../mongoClient");
// const searchIndexer = require("./searchIndex");

const fetchAll = async (fetchQuery) => {
	const request = JSON.parse(fetchQuery);
	let note;
	try {
		// await searchIndexer(); // Text index already created

		if (request.searchQuery) {
			const result = client
				.db("Notes")
				.collection("allNotes")
				.find({ $text: { $search: request.searchQuery } });
			note = await result.toArray();
		} else if (request.noteType) {
			const result = client
				.db("Notes")
				.collection("allNotes")
				.find({ status: request.noteType });
			note = await result.toArray();
		}
		return note;
	} catch (error) {
		console.log("database/services/fetch.js\n", error);
	}
};

module.exports = fetchAll;
