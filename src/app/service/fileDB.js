angular.module('horas-app').provider('fileDb',function() {
	
	var _fdb = null;
	var _dir = null;

	this.setConnection = function (connection){
		_fdb = connection;
	};

	this.setDirectory = function(d) {
		_dir = d;
	};

	function _do(_cb){
		_fdb.open(_dir,function(err, db){
			_cb(db);
		});
	}

	this.$get = function(){
		return {
			exec: _do
		};
	};

});