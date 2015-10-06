angular.module('horas-app').factory('checkpointDao',function(fileDb, dbConst){

	var _collection = dbConst.checkpoint.collection;

	var _save = function(data) {
		fileDb.exec(function(db){
			db.use(_collection)
			 .save(data)
			 .exec();
		});
	};

	var _getAll = function(){
		fileDb.exec(function(db){
			db.use(_collection)
			 .find()
			 .exec(function(err, data){
			 	console.log(data);
			 });
		});
	};

	return {
		save: _save,
		getAll: _getAll
	};
});