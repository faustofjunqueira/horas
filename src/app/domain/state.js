var StateStatus = {
	Initial: 1,
	End: 2,
	Middle: 3
};

function StateTransaction(_serial, _name, _exibitionName, _message, _action){
	this._id = _serial || '';
	this.destionation = [];
	this.name = _name || '';
	this.exibitionName = _exibitionName || '';
	this.message = _message || '';
	this.action = _action || function() {};

}

function StateNode(_stateStatus){
	this.status = _stateStatus || StateStatus.Middle;
	this.pair = {};
	this.transactions = [];

	// [StateNode, StateTransaction]
	this.addDestionationNode = function (_pair) {
		this.pair[_pair[1]._id] = _pair[0];
		this.transactions.push(_pair[1]);
	};

	this.applyTransaction = function(_trans){
		_trans.action();
		return this.pair[_trans._id];
	};
}