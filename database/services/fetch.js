const client = require("../../mongoClient");

const fetchAll = async (query, pathParam) => {
	try {
		const note = client.db("notesDB").collection(pathParam).find(query);

		if (note) {
			const result = await note.toArray();
			return result;
		} else {
			console.log(`nothing found with query ${JSON.stringify(query)}`);
		}
	} catch (error) {
		console.log("database/services/fetch.js\n", error);
	}
};

module.exports = fetchAll;
