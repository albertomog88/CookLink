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

  it("No debe registrar un usuario con contraseña menor a 8 caracteres", () => {
    const usuario = {
      username: "Paula",
      password: "1234567",
    };

    assert.rejects(User.registro(usuario));
  });

  it("No debe registrar un usuario con contraseña mayor a 20 caracteres", () => {
    const usuario = {
      username: "Paulaaa",
      password: "123456789012345678901",
    };

    assert.rejects(User.registro(usuario));
  });

  it("No debe registrar un usuario con contraseña vacía", () => {
    const usuario = {
      username: "QWERT",
      password: "",
    };

    assert.rejects(User.registro(usuario));
  });

  it("No debe registrar un usuario con nombre de usuario vacío", () => {
    const usuario = {
      username: "",
      password: "12345678",
    };

    assert.rejects(User.registro(usuario));
  });

// LO SUYO SERÍA HACER EL RESTO DE COMPROBACIONES DE LA CONTRASEÑA CUANDO DESCOMENTEMOS EL HECHO DE QUE SE TIENE QUE AÑADIR
// MAYÚSCULAS, MINÚSCULAS, NÚMEROS Y CARACTERES ESPECIALES

  it("No debe registrar un usuario ya existente", () => {
    const usuario = {
      username: "Luis",
      password: "234567654",
    };

    assert.rejects(User.registro(usuario));
  });

});
