const { client, getNotes, createUpdateNote } = require("../mongodb");

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
		await createUpdateNote(client, newPost.query, newPost.noteData, res);
	} catch (error) {
		console.error(error);
	}
};

// const updateEntry = async (req, res) => {
// 	const newValue = req.body;

// 	if (!newValue.value) {
// 		res.send("empty values and/or keys");
// 	} else {
// 		try {
// 			await updateNote(client, newPost, res);
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	}
// 	res.status(200).send(`updated`);
// };

// const deleteEntry = (req, res) => {
// 	mainCollection
// 		.deleteOne({ _id: ObjectId(req.body.id) })
// 		.then((result) => {
// 			res.status(200).send(`deleted`);
// 		})
// 		.catch((error) => console.log(error));
// };

module.exports = {
	getData,
	submitData,
	// updateEntry,
	// deleteEntry,
};
