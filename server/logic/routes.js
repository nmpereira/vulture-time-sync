const express = require('express');
const router = express.Router();

let roomID;
router.get('/:id', async (req, res) => {
	module.exports = roomID = req.params.id;

	res.render('../client');
});
module.exports = { router };
