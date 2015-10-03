angular.module('horas-app').directive('toolbarWindow',function(){
	return {
		transclude: false,
		templateUrl: 'app/view/directive/toolbarWindow.html',
		restrict: 'E',
		scope: {
		},
		link: function( scope, element, attrs, ctrl) {

			function close_application() {
				window.close();
			}

			var jQueryButtonClose = element.find('.hc-close');
			jQueryButtonClose.on('click',close_application);
		}
	};
});