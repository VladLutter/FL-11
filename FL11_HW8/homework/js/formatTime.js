function formatTime (inMin) {
	let hour = 60, minInDay = 1440, inpMin, inpHour, inpDay, getTime;

	inpDay = Math.floor(inMin / minInDay);
	inpHour = Math.floor((inMin % minInDay)/hour);
	inpMin = inMin % hour;

	getTime = inpDay + " " + "day(s)" + " " + inpHour + " " + 
	"hour(s)" + " " + inpMin + " " + "minute(s).";

	console.log(getTime);
	return;
}

formatTime(120);
formatTime(59);
formatTime(3601);