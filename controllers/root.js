const {
	client,
	getNotes,
	createNote,
	updateNote,
	deleteNote,
} = require("../mongodb");

const getData = async (req, res) => {
	try {
		await getNotes(client, {}, res);
	} catch (error) {
		console.error(error);
	}
};

const submitData = async (req, res) => {
	const newPost = req.body;
	try {
		await createNote(client, newPost.noteData, res);
	} catch (error) {
		console.error(error);
	}
};

const updateEntry = async (req, res) => {
	const newValue = req.body;

	try {
		await updateNote(client, newValue.query, newValue.noteData, res);
	} catch (error) {
		console.error(error);
	}
};

const deleteEntry = async (req, res) => {
	const newValue = req.body;

	try {
		await deleteNote(client, newValue, res);
	} catch (error) {
		console.error(error);
	}
};

module.exports = {
	getData,
	submitData,
	updateEntry,
	deleteEntry,
};
