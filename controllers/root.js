const {
	getNotes,
	createNote,
	updateNote,
	deleteNote,
} = require("../database/mongodb");

const getData = async (req, res) => {
	try {
		await getNotes({}, req, res);
	} catch (error) {
		console.error(error);
	}
};

const submitData = async (req, res) => {
	const newPost = req.body;
	try {
		await createNote(newPost.noteData, req, res);
	} catch (error) {
		console.error(error);
	}
};

const updateEntry = async (req, res) => {
	const newValue = req.body;
	try {
		await updateNote(newValue.query, newValue.noteData, req, res);
	} catch (error) {
		console.error(error);
	}
};

const deleteEntry = async (req, res) => {
	const newValue = req.body;

	try {
		await deleteNote(newValue, req, res);
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
