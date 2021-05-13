const express = require("express");
const router = express.Router();
const {
	getData,
	submitData,
	updateEntry,
	deleteEntry,
} = require("../controllers/root.js");

router.route("/").get(getData).post(submitData);

// router.route("/:id").put(updateEntry).delete(deleteEntry);

module.exports = router;
