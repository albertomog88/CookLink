/* eslint-disable no-undef */

const assert = require("assert");
const { deleteUsers } = require("./testUtils");
const User = require("../models/userModel");

describe("Registro usuario", () => {
	before(deleteUsers); // Antes de todos los test
	afterEach(deleteUsers); // Despues de cada test

	it("Debe registrar correctamente un usuario nuevo con contraseña correcta", () => {
		const usuario = {
			username: "Luis",
			password: "12345678"
		};

		assert.doesNotReject(User.registro(usuario));
	});

	it("No debe registrar un usuario repetido", async () => {
		const usuario = {
			username: "Paula",
			password: "12345678"
		};

		await User.registro(usuario);
		assert.rejects(User.registro(usuario));
	});
});
