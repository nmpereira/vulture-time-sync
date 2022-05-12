class Timer {
	constructor(roomID, duration) {
		this.roomID = roomID;
		this.duration = duration;
		this.timeWatch;
	}
	start() {
		this.timeWatch = setInterval(() => {
			console.log(this.duration--);
			this.duration < 0 ? this.reset() : false;
		}, 1000);
	}

	resume() {
		clearInterval(this.timeWatch);
		console.log(this.duration--);
		this.timeWatch = setInterval(() => {
			console.log(this.duration--);
			this.duration < 0 ? this.reset() : false;
		}, 1000);
	}
	pause() {
		clearInterval(this.timeWatch);
		console.log(this.duration);
		this.timeWatch = setInterval(() => console.log(this.duration), 1000);
	}
	reset() {
		clearInterval(this.timeWatch);
	}
}

module.exports = { Timer };
