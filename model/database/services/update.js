const client = require("../mongoClient");
const ObjectId = require("mongodb").ObjectId;

const updateExisting = async (updateQuery, updateData) => {
	try {
		const note = await client
			.db("Notes")
			.collection("allNotes")
			.updateOne(
				{ _id: ObjectId(updateQuery.selectedId) },
				{ $set: { ...updateData } }
			);

		if (note.modifiedCount > 0) {
			return { success: true, updated: note.modifiedCount };
		} else {
			console.log(note);
			return { success: false };
		}
	} catch (error) {
		console.log("database/services/update.js\n", error);
	}
};

module.exports = updateExisting;
