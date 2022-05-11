const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const http = require('http');
const server = http.createServer(app);
const path = require('path');
const routes = require('./logic/routes');
// const router = express.Router();
const { logger } = require('./helpers/helpers');
const { Timer } = require('./logic/timer');

const NODE_ENV = process.env.NODE_ENV || 'Local';

// import db for inital connection
const mongo = require('./logic/database');
app
	.use(logger)
	.set('json spaces', 2)
	.set('view engine', 'ejs')
	.use(express.static(path.join(__dirname, '../client')))
	.use('/', routes)
	.get('/', (req, res) => {
		res.render('../client');
	});
server.listen(port, () => console.log(`Listening on port ${port}`));

console.log('Env:', NODE_ENV);

module.exports = { server };

// const timer1 = new Timer('abc', 10);
// timer1.start();

// setTimeout(() => timer1.pause(), 3000);
// setTimeout(() => timer1.resume(), 6000);
// setTimeout(() => timer1.pause(), 10000);
// setTimeout(() => timer1.resume(), 15000);
