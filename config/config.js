module.exports = {
	port: process.env.PORT,
	baseURrl: process.env.BASE_URL,
	saltRounds: parseInt(process.env.SALT_ROUNDS, 10)
};
