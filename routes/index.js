// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/favicon.ico', (req, res) => {
    res.status(204).end(); // No devuelve nada y evita el error
  });

// O si tienes un favicon.ico:
// router.get('/favicon.ico', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/favicon.ico'));
//   });

module.exports = router;