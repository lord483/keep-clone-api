const client = require("../../mongoClient");
const ObjectId = require("mongodb").ObjectId;

const deleteOld = async (deleteQuery, pathParam) => {
	const note = await client
		.db("notesDB")
		.collection(pathParam)
		.deleteOne({ _id: ObjectId(deleteQuery.selectedId) });

	if (note) {
		return { success: true };
	} else {
		console.log(note);
		return { success: false };
	}
};

module.exports = deleteOld;
