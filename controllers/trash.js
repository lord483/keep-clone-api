const parameters = require("../mongodb");

const getTrashData = (req, res) => {
	parameters.trashCollection
		.find({})
		.toArray()
		.then((result) => {
			res.status(200).send(result);
		})
		.catch((error) => console.log(error));
};

const putTrashData = (req, res) => {
	const newPost = req.body;
	parameters.trashCollection
		.insertOne(newPost)
		.then(() => {
			res.status(200).send(`new post added`);
		})
		.catch((error) => console.log(error));
};

const deleteTrash = (req, res) => {
	parameters.trashCollection
		.deleteOne({ _id: ObjectId(req.body.id) })
		.then((result) => {
			res.status(200).send(`deleted`);
		})
		.catch((error) => console.log(error));
};

module.exports = {
	getTrashData,
	putTrashData,
	deleteTrash,
};
