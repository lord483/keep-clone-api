const fetchAll = require("./services/fetch");
const createNew = require("./services/create");
const updateExisting = require("./services/update");
const deleting = require("./services/delete");
const client = require("./mongoClient");

const main = async () => {
	try {
		await client.connect();
		console.log("connected to DB");
	} catch (error) {
		console.error(error);
	}
};

main().catch(() => console.log(error));

const getNotes = async (currentRequest) => {
	const result = await fetchAll(currentRequest);
	return result;
};

const createNote = async (noteData) => {
	const result = await createNew(noteData);
	return result;
};

const updateNote = async (updateQuery, updateData) => {
	const result = await updateExisting(updateQuery, updateData);
	return result;
};

const deleteNote = async (deleteQuery) => {
	const result = await deleting(deleteQuery);
	return result;
};

module.exports = {
	client,
	getNotes,
	createNote,
	updateNote,
	deleteNote,
};
