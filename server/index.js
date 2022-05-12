const express = require('express');
const port = process.env.PORT || 3000;
const path = require('path');
const { router } = require('./logic/routes');
const { logger } = require('./helpers/helpers');
const { Timer } = require('./logic/timer');
const sockets = require('./logic/socket');
const { app, server } = require('./logic/server');
const NODE_ENV = process.env.NODE_ENV || 'Local';

// import db for inital connection
const mongo = require('./logic/database');
app
	.use(logger)
	.set('json spaces', 2)
	.set('view engine', 'ejs')
	.use(express.static(path.join(__dirname, '../client')))
	.use('/', router)
	.get('/', (req, res) => {
		res.render('../client');
	});
server.listen(port, () => console.log(`Listening on port ${port}`));

console.log('Env:', NODE_ENV);
