const api = require('../api');
const express = require('express');
const router = express.Router();

router.route('/note')
    .post(api.insert)
    .get(api.findAll);

router.route('/note/:id')
    .delete(api.remove)
    .get(api.findOne)
    .put(api.update);

module.exports = router;
