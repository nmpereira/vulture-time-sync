const { Server } = require('socket.io');
const { server } = require('./server');
const io = new Server(server);
const routes = require('./routes');

io.on('connection', (socket) => {
	console.log(`New Client connected to room: ${routes.roomID}`);
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});
