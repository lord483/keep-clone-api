const client = require("../mongoClient");
const searchIndexer = require("./searchIndex");

const fetchAll = async (currentStatus) => {
	try {
		const note = await client
			.db("Notes")
			.collection("allNotes")
			.find({ status: currentStatus });
		return await note.toArray();
	} catch (error) {
		console.log("database/services/fetch.js\n", error);
	}
};

module.exports = fetchAll;
