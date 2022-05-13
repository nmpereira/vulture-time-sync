const { routes, roomID } = require('./routes');
const { Server } = require('socket.io');
const { server } = require('./server');
const io = new Server(server);
// const { Timer } = require('./timer');
// const { timer60 } = require('./times');

io.on('connection', (socket) => {
	const roomID = socket.handshake.headers.referer.split('/').pop();
	console.log(`New Client connected to room: ${roomID}`);
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});

	console.log(roomID);
	socket.join(roomID);
	socket.emit('message', 'Greetings Earthlings');
	io.to(roomID).emit('message', { roomID });
});

const sendTimeStamp = (value) => io.sockets.emit('message', value);
module.exports = { io, sendTimeStamp };
