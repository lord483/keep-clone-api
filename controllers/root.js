const {
	getNotes,
	createNote,
	updateNote,
	deleteNote,
} = require("../model/database/mongodb");

const getData = async (req, res) => {
	const request = req.query.query;
	try {
		const result = await getNotes(request);
		res.status(200).json(result);
	} catch (error) {
		console.error(error);
	}
};

const submitData = async (req, res) => {
	const newPost = req.body;
	try {
		const result = await createNote(newPost.noteData);
		res.json(result);
	} catch (error) {
		console.error(error);
	}
};

const updateEntry = async (req, res) => {
	let newValue = req.body;
	if ("status" in newValue.noteData) {
		let tempData = req.body.noteData;
		if (tempData.history[tempData.history.length - 1] === tempData.status) {
			return;
		} else {
			newValue = {
				...newValue,
				noteData: {
					...tempData,
					history: [...tempData.history, tempData.status],
				},
			};
		}
	} else {
		newValue = req.body;
	}
	try {
		const result = await updateNote(newValue.query, newValue.noteData);
		res.json(result);
	} catch (error) {
		console.error(error);
	}
};

const deleteEntry = async (req, res) => {
	const queryValue = req.body.query;
	try {
		const result = await deleteNote(queryValue);
		res.json(result);
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
