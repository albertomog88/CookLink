require("dotenv").config();

const server = require("../app");
const db = require("../config/database");

process.on('exit', async () => {
    await db.end();
    server.close();
});