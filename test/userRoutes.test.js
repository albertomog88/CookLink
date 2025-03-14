const assert = require("assert");
const { deleteUsers } = require("./testUtils");
const { base_url, port } = require("../config/config");



describe("Rutas de usuario", () => {
  const route = `http://${base_url}:${port}/users/registro`;
  before(deleteUsers);
  afterEach(deleteUsers);

  it("Debe registrar correctamente un usuario nuevo con contraseña correcta", async () => {
    const usuario = {
      username: "Luis",
      password: "12345678Aa:",
      confirm_password: "12345678Aa:"
    };

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

    const res = await fetch(route, {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
      }
    });

    assert.equal(res.status, 400); // 400 es el codigo de que la petición era invalida
  });

  it("No debe registrar un usuario con contraseña demasiado corta", async ()=>{
    const usuario = {
      username: "Victor",
      password: "123bA-",
      confirm_password: "123bA-"
    };

    const res = await fetch(route, {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
      }
    });

    assert.equal(res.status, 400); 
  })

  it("No debe registrar un usuario con contraseña que supera el máximo permitido", async ()=>{
    const usuario = {
      username: "Victor",
      password: "123bA77-" + "1".repeat(50),
      confirm_password: "123bA77-" + "1".repeat(50)
    };

    const res = await fetch(route, {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
      }
    });

    assert.equal(res.status, 400); 
  })

  it("No debe registrarse un usuario ya existente", async()=>{

    const usuario = {
      username:"Alfredo",
      password:"Ab12345-",
      confirm_password:"Ab12345-"
    };

    const res = await fetch(route, {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
      }
    });

    const res2 = await fetch(route, {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
      }
    });

    assert.equal(res.status, 200);
    assert.equal(res2.status, 409);
  });
  
  it("No debe registrar un usuario con contraseña que no contenga una letra minúscula", async ()=>{
    const usuario = {
      username: "Victor",
      password: "123BA77-",
      confirm_password: "123BA77-"
    };

    const res = await fetch(route, {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
      }
    });

    assert.equal(res.status, 400); 
  })
  
  it("No debe registrar un usuario con contraseña que no contenga una letra mayúscula", async ()=>{
    const usuario = {
      username: "Victor",
      password: "123ba77-",
      confirm_password: "123ba77-"
    };

    const res = await fetch(route, {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
      }
    });

    assert.equal(res.status, 400); 
  })

  it("No debe registrar un usuario con contraseña que no contenga un número", async ()=>{
    const usuario = {
      username: "Victor",
      password: "aaabaBB-",
      confirm_password: "aaabaBB-"
    };

    const res = await fetch(route, {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
      }
    });

    assert.equal(res.status, 400); 
  })

  it("No debe registrar un usuario con contraseña que no contenga un carácter especial", async ()=>{
    const usuario = {
      username: "Victor",
      password: "123ba770",
      confirm_password: "123ba770"
    };

    const res = await fetch(route, {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
      }
    });

    assert.equal(res.status, 400); 
  })

  it("No debe registrar un usuario con una contraseña vacía", async ()=>{
    const usuario = {
      username: "Victor",
      password: "",
      confirm_password: ""
    };

    const res = await fetch(route, {
      method: "POST",
      body: JSON.stringify(usuario),
      headers: {
        "Content-Type": "application/json",
      }
    });

    assert.equal(res.status, 400); 
  })
});
