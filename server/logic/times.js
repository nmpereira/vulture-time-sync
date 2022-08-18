// const { Timer } = require('./Timer');
// // const { io, sendTimeStamp } = require('./socket');

// const roomID = '64654654';

// const timer60 = new Timer(roomID, 60);

// // console.log('starting');

// // module.exports = { timer60 };
const { Timer } = require('./timer');

const timer60 = new Timer('64654654', 500000);

timer60.start();

// const { roomID } = require('./routes');

// console.log('roomID', roomID);

// const timeKeeper=(roomID, duration )=>{

// }
