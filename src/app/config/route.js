angular.module('horas-app').config(function($routeProvider,$locationProvider){
	$locationProvider.html5Mode(true);

	$routeProvider.when('/hour',{
		templateUrl: 'app/view/hour.html',
		controller: 'hourCtrl'
	}).otherwise({
		redirectTo: '/hour'
	});

});