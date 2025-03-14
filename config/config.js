// config/config.js
module.exports = {
    port: process.env.PORT || 3000,
    base_url: process.env.BASE_URL || "localhost",
    salt_rounds: parseInt(process.env.SALT_ROUNDS) || 10
};