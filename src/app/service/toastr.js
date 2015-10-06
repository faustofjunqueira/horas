angular.module('horas-app').factory('toastr',function(){
		
	var status = ['info', 'success', 'warning','error'];

	var defaults = {
		"closeButton": false,
		"debug": false,
		"newestOnTop": false,
		"progressBar": false,
		"positionClass": "toast-bottom-right",
		"preventDuplicates": false,
		"onclick": null,
		"showDuration": "300",
		"hideDuration": "1000",
		"timeOut": "5000",
		"extendedTimeOut": "1000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut"
	};

	function createToaStrFunction(status) {
		return function(message, title){
			var toastrOpt = angular.copy(defaults,obj.options);
			toastr.options = toastrOpt;
			toastr[status](message,title);
		};
	}

	var obj = {
		setOption: function(options) {
			this.options = options;
		}
	};

	status.forEach(function(i){
		obj.options = obj.options || {};
		obj[i] = createToaStrFunction(i);
	});

	return obj;
});