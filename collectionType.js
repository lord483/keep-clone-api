const collectionType = (req, res, next) => {
	req.query.type = req.query.type || "notes";
	next();
};
module.exports = collectionType;
