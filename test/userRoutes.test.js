const assert = require("assert");
const { deleteUsers } = require("./testUtils");
const { base_url, port } = require("../config/config");



describe("Rutas de usuario", () => {
  before(deleteUsers);
  afterEach(deleteUsers);

  it("Debe registrar correctamente un usuario nuevo con contraseña correcta", async () => {
    const usuario = {
      username: "Luis",
      password: "12345678Aa:",
      confirm_password: "12345678Aa:"
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

  it("No debe registrar un usuario con contraseñas no coincidentes", async () => {
    const usuario = {
      username: "Luis",
      password: "12345678Aa:",
      confirm_password: "12345679Aa:"
    };

    const route = `http://${base_url}:${port}/users/registro`;

    const res = await fetch(route, {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
      }
    });

    assert.equal(res.status, 400); // 400 es el codigo de que la petición era invalida
  });
});
