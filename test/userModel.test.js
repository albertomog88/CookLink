require("dotenv").config();
const assert = require("assert");
const db = require("../config/database");
const User = require("../models/userModel");

const deleteUsers = async () => {
  await db.query("DELETE FROM usuarios");
}
describe("Registro usuario", () => {
  beforeEach(deleteUsers);
  afterEach(deleteUsers);
  after(async () => await db.end());
  
  it("Debe registrar correctamente un usuario nuevo con contraseña correcta", () => {
    const usuario = {
      username: "Luis",
      password: "12345678",
    };

    assert.doesNotReject(User.registro(usuario));
  });


});
