const client = require("../mongoClient");
const ObjectId = require("mongodb").ObjectId;

const deleteOld = async (deleteQuery) => {
	try {
		await client
			.db("Notes")
			.collection("allNotes")
			.deleteOne({ _id: ObjectId(deleteQuery) });
		return { success: true };
	} catch (error) {
		console.log(error);
		return { success: false };
	}
};

module.exports = deleteOld;
