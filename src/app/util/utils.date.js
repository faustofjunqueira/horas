function now(){
	return moment();
}

function dateDiff(dateStart, dateEnd){
	var momentStart = moment(dateStart);
	var momentEnd = moment(dateEnd);
	var total = {
		day: Math.abs( momentEnd.diff(momentStart,'days')),
		hour: Math.abs( momentEnd.diff(momentStart,'hour')),
		minute: Math.abs( momentEnd.diff(momentStart,'minute')),
		second: Math.abs( momentEnd.diff(momentStart,'second')),
		milisecond: Math.abs( momentEnd.diff(momentStart,'milisecond')),
	};

	return {
		total : total,
		day: total.day,
		hour: Math.abs(total.hour - total.day*24),
		minute: Math.abs(total.minute - total.hour*60),
		second: Math.abs(total.second - total.minute*60),
		milisecond: Math.abs(total.milisecond - total.second * 1000)
	};
}