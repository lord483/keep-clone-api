const { MongoClient } = require("mongodb");
require("dotenv").config();
const uri = process.env.KEEP_DB_URI; // Fetch your own MongoDB URI

// Create new MongoClient and Solve useNewUrlParser, useUnifiedTopology deprecation warnings

const client = new MongoClient(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

module.exports = client;
