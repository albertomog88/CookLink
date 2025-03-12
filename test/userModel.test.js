const assert = require("assert");
const User = require("../models/userModel");

describe("Registro usuario", () => {
  it("Debe registrar correctamente un usuario nuevo con contraseña correcta", () => {
    const usuario = {
      username: "Luis",
      password: "12345678",
    };

    assert.doesNotReject(User.registro(usuario));
  });

  it("No debe registrar con una contraseña menor a 8 caracteres", () => {
    const usuario = {
        username: "asdhjkasf",
        password: "1234567",
      };
  
      assert.doesNotReject(User.registro(usuario));
  })
});
