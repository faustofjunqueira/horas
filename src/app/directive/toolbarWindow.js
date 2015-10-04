angular.module('horas-app').directive('toolbarWindow',['viewPath', function(viewPath){
	return {
		transclude: false,
		templateUrl: viewPath.directive + 'toolbarWindow.html',
		restrict: 'E',
		scope: {},
		link: function( scope, element, attrs, ctrl) {
			
			function closeApplication() {
				window.close();
			}

			function minimizeApplication() {
				var gui = require('nw.gui');
				var win = gui.Window.get();
				win.minimize();
			}
			
			scope.closeApplication = closeApplication;
			scope.minimizeApplication = minimizeApplication;

		}
	};
}]);