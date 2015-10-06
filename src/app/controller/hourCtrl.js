angular.module('horas-app').controller('hourCtrl',function($scope, hourStateMachine, toastr){

	var _stateMachine = hourStateMachine.createStateMachine();
	var checkpoint = null;
	$scope.resumeDay = null;

	$scope.clickTransaction = function(transaction) {
		toastr.info(transaction.message, transaction.name);
		$scope.currentState = $scope.currentState.applyTransaction(transaction);
		if($scope.currentState.status == StateStatus.End) {
			checkpoint = hourStateMachine.getCheckpoint();
			$scope.resumeDay = checkpoint.totalWorkHour();
			hourStateMachine.saveCheckpoint(checkpoint);
		} else {
			checkpoint = null;
			$scope.resumeDay = null;
		}
	};

	$scope.currentState = _stateMachine.filter(function(x) {
		return x.status == StateStatus.Initial;
	})[0];

});