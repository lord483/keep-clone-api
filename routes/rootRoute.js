const express = require("express");
const router = express.Router();
const {
	getData,
	submitData,
	updateEntry,
	deleteEntry,
} = require("../controllers/root.js");

router.route("/").get(getData).post(submitData);

router.route("/update").put(updateEntry);
router.route("/delete").delete(deleteEntry);

module.exports = router;
