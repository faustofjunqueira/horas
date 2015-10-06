angular.module('horas-app').service('hourStateMachine',function(serialGenerator,checkpointDao){
	var self = this;

	this.arrivalHour = null;
	this.leaveHour = null;
	this.intervalHour = [];
	this.intervalHourLeave = null;

	this.createStateMachine = function() {
		var _arrivalTransaction = new StateTransaction(serialGenerator.generate(), 'Chegada', 'Chegada', 'Bem vindo, bom trabalho!', function(){ self.arrivalHour = now(); });
		var _leaveTransaction = new StateTransaction(serialGenerator.generate(), 'Saída', 'Saída', 'Obrigado! Tenha um bom descanço!', function(){ self.leaveHour = now(); });
		var _goLunchTransaction = new StateTransaction(serialGenerator.generate(), 'Intervalo', 'Intervalo', 'Descance, estaremos lhe aguardando', function(){ self.intervalHourLeave = now(); });
		var _goBackLunchTransaction = new StateTransaction(serialGenerator.generate(), 'Voltar do Intervalo', 'Voltar do Intervalo', 'Olá!', 
			function(){  
				self.intervalHour.push({in:self.intervalHourLeave, out:now()});
		 		self.intervalHourLeave = null; 
		 	});

		var _arrivalState = new StateNode(StateStatus.Initial);
		var _workingState = new StateNode(StateStatus.Middle);
		var _lunchingState = new StateNode(StateStatus.Middle);
		var _leaveState = new StateNode(StateStatus.End);

		_arrivalState.addDestionationNode([_workingState, _arrivalTransaction]);
		_workingState.addDestionationNode([_lunchingState, _goLunchTransaction]);
		_workingState.addDestionationNode([_leaveState, _leaveTransaction]);
		_lunchingState.addDestionationNode([_workingState, _goBackLunchTransaction]);

		return [_arrivalState,_workingState,_lunchingState,_leaveState];
	};

	this.getCheckpoint = function (){
		var check = new Checkpoint(this.arrivalHour, this.leaveHour);
		this.intervalHour.forEach(function(x){
			check.addRestHour(x);
		});
		return check;
	};

	this.saveCheckpoint = function(checkpoint) {
		checkpointDao.save(checkpoint);
		checkpointDao.getAll();
	};

});

