const { Server } = require('socket.io');
const { server } = require('../index');
const io = new Server(server, { pingTimeout: 5000 });
