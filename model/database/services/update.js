const client = require("../mongoClient");
const ObjectId = require("mongodb").ObjectId;

const updateExisting = async (updateQuery, updateData) => {
	let tempData;

	if ("status" in updateData) {
		if (
			updateData.history[updateData.history.length - 1] === updateData.status
		) {
			return;
		} else {
			tempData = {
				...updateData,
				history: [...updateData.history, updateData.status],
			};
		}
	} else {
		tempData = updateData;
	}

	try {
		const note = await client
			.db("Notes")
			.collection("allNotes")
			.updateOne(
				{ _id: ObjectId(updateQuery.selectedId) },
				{ $set: { ...tempData } }
			);

		if (note.modifiedCount > 0) {
			return { success: true, updated: note.modifiedCount };
		} else {
			console.log("database/services/update.js\n", note);
			return { success: false };
		}
	} catch (error) {
		console.log("database/services/update.js\n", error);
	}
};

module.exports = updateExisting;
