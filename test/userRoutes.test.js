const assert = require("assert");
const { deleteUsers } = require("./testUtils");
const { base_url, port } = require("../config/config");



describe("Rutas de usuario", () => {
  before(deleteUsers);
  afterEach(deleteUsers);

  it("Debe registrar correctamente un usuario nuevo con contraseña correcta", async () => {
    const usuario = {
      username: "Luis",
      password: "12345678",
      confirm_password: "12345678"
    };

    const route = `http://${base_url}:${port}/users/registro`;

    const res = await fetch(route, {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
      }
    });

    assert.equal(res.status, 200); // 200 es el codigo de que todo ha ido bien
  });
});
