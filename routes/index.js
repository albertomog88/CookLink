// Routes/index.js
const express = require("express");
const { noContent } = require("../config/httpcodes");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("index");
});

router.get("/favicon.ico", (req, res) => {
	res.status(noContent).end(); // No devuelve nada y evita el error
});

// O si tienes un favicon.ico:
// Router.get('/favicon.ico', (req, res) => {
//     Res.sendFile(path.join(__dirname, '../public/favicon.ico'));
//   });

module.exports = router;
