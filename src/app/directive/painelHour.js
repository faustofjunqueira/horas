angular.module('horas-app').directive('painelHour', ['viewPath','$interval', function(viewPath,$interval){

	return {
		templateUrl : viewPath.directive + 'painelHour.html',
		transclude: false,
		scope: {},
		link: function(scope, element, attr){
			var time = new Date();
			scope.time = time;
			$interval(function(){
				time = scope.time;
				time.setSeconds(time.getSeconds() + 1);
				scope.time = time;
			}, 1000);

		}
	};
}]);