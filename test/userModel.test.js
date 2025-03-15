/* eslint-disable no-undef */

const assert = require("assert");
const { deleteUsers } = require("./testUtils");
const User = require("../models/userModel");

describe("Registro usuario", () => {
	before(deleteUsers); // Antes de todos los test
	afterEach(deleteUsers); // Despues de cada test

	it("Debe registrar correctamente un usuario nuevo con contraseña correcta", async () => {
		const usuario = {
			username: "Luis",
			password: "12345678"
		};

		let good = true;

		try {
			await User.registro(usuario);
		}
		catch (err) {
			good = false;
		}

		assert.ok(good);
	});

	it("No debe registrar un usuario repetido", async () => {
		const usuario = {
			username: "Paula",
			password: "12345678"
		};

		await User.registro(usuario);

		let good = false;
		try {
			await User.registro(usuario);
		}
		catch (err) {
			console.log(err.code);
			good = true;
		}

		assert.ok(good);
	});

	it("No debe registrar un usuario sin nombre", async () => {
		const usuario = { password: "12345678" };

		let good = false;
		try {
			await User.registro(usuario);
		}
		catch (err) {
			good = true;
		}

		assert.ok(good);
	});

	it("No debe registrar un usuario sin contraseña", async () => {
		const usuario = { username: "Paula" };

		let good = false;
		try {
			await User.registro(usuario);
		}
		catch (err) {
			console.log(err);
			good = true;
		}

		assert.ok(good);
	});
});
