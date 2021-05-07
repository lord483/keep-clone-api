const allowCORS = (res, req, next) => {
	const headers = {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,POST,PUT,DELETE",
		"Access-Control-Allow-Headers": "Content-Type",
	};
	res.header(headers);
	next();
};

module.exports = allowCORS;
