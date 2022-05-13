import { hmsToSeconds, secondsToHMS } from '../helpers/helpers.js';
import { updateTimeStamp } from '../index.js';
const socket = io();
socket.on('message', (msg) => {
	console.log('Message from server', msg);
});

socket.on('timestamp', (msg) => {
	console.log('timestamp', secondsToHMS(msg));
	updateTimeStamp(secondsToHMS(msg));
});
