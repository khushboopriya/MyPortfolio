const express = require('express');
const router = express.Router();
const projects = require('../models/projectModel');
// const auth = require('../middlewares/auth');

router.get('/', (req, res) => {
    projects.find({})
    .then(products => {
        res.status(200).send(products);
    })
    .catch(() => {
        res.status(500).send({ error: "Internal Server Error" });
    });
});

module.exports = router;