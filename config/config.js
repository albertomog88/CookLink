// config/config.js
module.exports = {
    port: process.env.PORT || 3070,
    base_url: process.env.BASE_URL,
    salt_rounds: parseInt(process.env.SALT_ROUNDS) || 10
};