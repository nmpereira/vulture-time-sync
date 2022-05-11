const express = require('express');
const router = express.Router();

// const { logger } = require('../helpers/helpers');
// const path = require('path');

// .use(logger)
// .set('json spaces', 2)
// .set('view engine', 'ejs')
// .use(express.static(path.join(__dirname, '../client')))

router.get('/:id', (req, res) => {
	const roomID = req.params.id;
	console.log(roomID);
	res.render('../client');
});

module.exports = router;
