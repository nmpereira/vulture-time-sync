const { io, sendTimeStamp } = require('./socket');

class Timer {
	constructor(roomID, duration) {
		this.roomID = roomID;
		this.duration = duration;
		this.timeWatch;
	}
	start() {
		this.timeWatch = setInterval(() => {
			this.duration <= 0 ? this.reset() : false;
			io.sockets.to(this.roomID).emit('timestamp', this.duration--);
			// console.log(this.duration);
		}, 1000);
	}

	resume() {
		clearInterval(this.timeWatch);
		console.log(this.duration--);
		this.timeWatch = setInterval(() => {
			io.sockets.emit('timestamp', this.duration--);
			this.duration < 0 ? this.reset() : false;
		}, 1000);
	}
	pause() {
		clearInterval(this.timeWatch);
		console.log(this.duration);
		this.timeWatch = setInterval(() => io.sockets.emit('timestamp', this.duration), 1000);
	}
	reset() {
		clearInterval(this.timeWatch);
	}
}

module.exports = { Timer };
