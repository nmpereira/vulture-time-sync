const express = require('express');
const port = process.env.PORT || 3000;
const path = require('path');
const { router } = require('./logic/routes');
const { logger } = require('./helpers/helpers');

const sockets = require('./logic/socket');
const { app, server } = require('./logic/server');
const NODE_ENV = process.env.NODE_ENV || 'Local';

// import db for inital connection
const mongo = require('./logic/database');
app
	.use(logger)
	.use(express.static(path.join(__dirname, '../client')))
	.set('json spaces', 2)
	.set('view engine', 'ejs')
	.set('trust proxy', true)
	.set('views', path.join(__dirname, '../client'))
	.use('/', router)
	.get('/', (req, res) => {
		res.render('../client/index.ejs');
	});
server.listen(port, () => console.log(`Listening on port ${port}`));

console.log('Env:', NODE_ENV);
