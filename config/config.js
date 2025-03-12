// config/config.js
module.exports = {
    port: process.env.PORT || 3000,
    salt_rounds: parseInt(process.env.SALT_ROUNDS) || 10
};