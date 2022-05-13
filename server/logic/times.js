// const { Timer } = require('./Timer');
// // const { io, sendTimeStamp } = require('./socket');

// const roomID = '0sdca9sd9h';

// const timer60 = new Timer(roomID, 60);

// // console.log('starting');

// // module.exports = { timer60 };
const { Timer } = require('./timer');

const timer60 = new Timer('asdhbasdoibasd', 30);

timer60.start();
