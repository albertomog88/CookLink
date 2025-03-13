const db = require("../config/database");

const deleteUsers = async () => {
    await db.query("DELETE FROM usuarios");
}

module.exports = { deleteUsers };