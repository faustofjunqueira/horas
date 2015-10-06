function Checkpoint(_inDate, _outDate) {
	this.in = _inDate || now();
	this.out = _outDate;
	this.restHour = [];

	this.toMoment = function(){
		this.in = moment(this.in);
		this.out = moment(this.out);
	};

	this.addRestHour = function(_rest){
		this.restHour.push(_rest);
	};

	this.totalRestHour = function(){
		if(!this.restHour.length) return 0;
		if(this.restHour.length == 1) return dateDiff(this.restHour[0].in, this.restHour[0].out).total.milisecond;
		return this.restHour.reduce(function(total, x){
			return total + dateDiff(x.in, x.out).total.milisecond;
		}, 0);
	};

	this.totalWorkHourFull = function(){
		return moment(this.out).diff(moment(this.in));
	};

	this.totalWorkHour = function(){
		var moments = this.in;
		moments.add(this.totalRestHour() ,'ms');
		return dateDiff(moments, this.out);
	};

}