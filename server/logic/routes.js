const express = require('express');
const router = express.Router();

let roomID;
router.get('/:id', async (req, res) => {
	roomID = req.params.id;

	res.render('../client');
	console.log('local roomID', roomID);
});
module.exports = { router };
