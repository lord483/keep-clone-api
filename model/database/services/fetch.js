const client = require("../mongoClient");
// const searchIndexer = require("./searchIndex");

const fetchAll = async (fetchQuery) => {
	const request = JSON.parse(fetchQuery);
	let mongoOp;
	try {
		// await searchIndexer(); // Text index already created

		if (request.searchQuery) {
			mongoOp = { $text: { $search: request.searchQuery } };
		} else if (request.noteType) {
			mongoOp = { status: request.noteType };
		}

		const result = client.db("Notes").collection("allNotes").find(mongoOp);

		return await result.toArray();
	} catch (error) {
		console.log("database/services/fetch.js\n", error);
	}
};

module.exports = fetchAll;
