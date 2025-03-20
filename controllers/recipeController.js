const { ok } = require("../config/httpcodes");

exports.getRecommendations = (req, res) => {
	res.send(ok);
};
