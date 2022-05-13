export const hmsToSeconds = (secs) => {
	// console.log(secs)
	if (secs == 0) return 0;

	// your input string
	const a = secs.split(':'); // split it at the colons
	let result = 0;
	if (a.length == 3) {
		result = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
	}
	if (a.length == 2) {
		result = +a[0] * 60 + +a[1];
	}
	// console.log(result)
	return result;
};
export const secondsToHMS = (secs) => {
	const sec_num = parseInt(secs, 10);
	const hours = Math.floor(sec_num / 3600);
	const minutes = Math.floor(sec_num / 60) % 60;
	const seconds = sec_num % 60;
	if (secs > 0) {
		return [ hours, minutes, seconds ]
			.map((v) => (v < 10 ? '0' + v : v))
			.filter((v, i) => v !== '00' || i > 0)
			.join(':');
	} else return 0;
};
