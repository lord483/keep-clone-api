const fetchAll = require("./services/fetch");
const createNew = require("./services/create");
const updateExisting = require("./services/update");
const deleting = require("./services/delete");
const client = require("../mongoClient");

const main = async () => {
	try {
		await client.connect();
		console.log("connected to DB");
	} catch (error) {
		console.error(error);
	}
};

main().catch(() => console.log(error));

const getNotes = async (query, req, res) => {
	const result = await fetchAll(query, req.query.type);
	res.status(200).json(result);
};

const createNote = async (noteData, req, res) => {
	const result = await createNew(noteData, req.query.type);
	res.json(result);
};

const updateNote = async (updateQuery, updateData, req, res) => {
	const result = await updateExisting(updateQuery, updateData, req.query.type);
	res.json(result);
};

const deleteNote = async (deleteQuery, req, res) => {
	const result = await deleting(deleteQuery, req.query.type);
	res.json(result);
};

module.exports = {
	client,
	getNotes,
	createNote,
	updateNote,
	deleteNote,
};
