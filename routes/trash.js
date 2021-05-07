const express = require("express");
const router = express.Router();
const {
	getTrashData,
	putTrashData,
	deleteTrash,
} = require("../controllers/trash");

router.get("/", getTrashData);

router.post("/", putTrashData);

router.delete("/api/trash", deleteTrash);

module.exports = router;
