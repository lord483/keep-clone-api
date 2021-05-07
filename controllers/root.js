const parameters = require("../app");
console.log(parameters);

const getData = (req, res) => {
	parameters.mainCollection
		.find({})
		.toArray()
		.then((result) => {
			console.log("request recieved");
			res.status(200).send(result);
		})
		.catch((error) => console.log(error));
};

const submitData = (req, res) => {
	const newPost = req.body;

	parameters.mainCollection
		.insertOne(newPost)
		.then(() => {
			res.status(200).send(`new post added`);
		})
		.catch((error) => console.log(error));
};

const updateEntry = (req, res) => {
	const newValue = req.body;

	if (!newValue.value) {
		res.send("empty values and/or keys");
	} else {
		for (let i = 0; i < newValue.value.length; i++) {
			const key = newValue.field[i];
			const value = newValue.value[i];
			parameters.mainCollection
				.updateOne(
					{ _id: ObjectId(newValue.id) },
					{ $set: { [key]: newValue.value } }
				)
				.then((result) => console.log(`${key.length} values updated`))
				.catch((error) => console.log(error));
		}
	}
	res.status(200).send(`updated`);
};

const deleteEntry = (req, res) => {
	parameters.mainCollection
		.deleteOne({ _id: ObjectId(req.body.id) })
		.then((result) => {
			res.status(200).send(`deleted`);
		})
		.catch((error) => console.log(error));
};

module.exports = {
	getData,
	submitData,
	updateEntry,
	deleteEntry,
};
