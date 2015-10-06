angular.module('horas-app').config(function(fileDbProvider, dbConst){
	fileDbProvider.setConnection(require('file-db'));
	fileDbProvider.setDirectory(dbConst.directory);
});