const express = require("express");
const router = express.Router();
const {
	getData,
	submitData,
	updateEntry,
	deleteEntry,
} = require("../controllers/root");

router.get("/", getData);

router.post("/", submitData);

router.put("/:id", updateEntry);

router.delete("/:id", deleteEntry);

module.exports = router;
