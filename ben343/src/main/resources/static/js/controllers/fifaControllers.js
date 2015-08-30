'use strict';

var benJControllers = angular.module('FifaControllers', []);

benJControllers.controller('FifaCtrl', ['$scope', '$log',
	function($scope, $log) {
		$scope.players = [];
		$scope.begin = false;
		
		$scope.playersCandidates1 = [];
		$scope.playersCandidates2 = [];
		
		$scope.playerPlaceholder = "Choisir un joueur";
		
		$scope.addPlayer = function() {
			console.log("newPlayer : ", $scope.newPlayer);
			var exist = false;
			angular.forEach($scope.players, function(row) {
				if(angular.equals($scope.newPlayer,row.nom)) {
					exist = true;
				}
			});
			if(exist === false) {
				var nP = 
					{
						nom: $scope.newPlayer, 
						gagne: 0, 
						perdu: 0, 
						nul: 0,
						points: 0, 
						butsMarques: 0,
						butsEncaisses: 0, 
						butsMoyenne: 0
					};
				$scope.players.push(nP);
				$scope.playersCandidates1.push(nP);
				$scope.playersCandidates2.push(nP);
				$scope.newPlayer = "";				
			}
		};
		
		$scope.newScore = {j1:{}, j2:{}, butJ1:0, butJ2:0};
		
		$scope.saveScore = function(){
			angular.forEach($scope.players, function(row) {
				if (angular.equals($scope.newScore.j1.nom, row.nom)) {
					row.butsMarques += $scope.newScore.butJ1;
					row.butsEncaisses += $scope.newScore.butJ2;
					row.butsMoyenne += ($scope.newScore.butJ1 - $scope.newScore.butJ2);
					if ($scope.newScore.butJ1 > $scope.newScore.butJ2) {
						row.gagne++;
						row.points +=3;
					} else if ($scope.newScore.butJ1 < $scope.newScore.butJ2) {
						row.perdu++;
					} else { 
						row.nul++;
						row.points ++;
					}
				}
				if (angular.equals($scope.newScore.j2.nom, row.nom)) {
					row.butsMarques += $scope.newScore.butJ2;
					row.butsEncaisses += $scope.newScore.butJ1;
					row.butsMoyenne += ($scope.newScore.butJ2 - $scope.newScore.butJ1);
					if ($scope.newScore.butJ2 > $scope.newScore.butJ1) {
						row.gagne++;
						row.points +=3;
					} else if ($scope.newScore.butJ2 < $scope.newScore.butJ1) {
						row.perdu++;
					} else {
						row.nul++;
						row.points ++;
					}
				}
			});
			angular.forEach($scope.scores, function(row) {
				if(angular.equals(row.j1.nom, $scope.newScore.j1.nom) && angular.equals(row.j2.nom, $scope.newScore.j2.nom)) {
					row.butJ1 = $scope.newScore.butJ1;
					row.butJ2 = $scope.newScore.butJ2;
					row.update = true;
				}
			});
			$scope.newScore = {j1:{}, j2:{}, butJ1:0, butJ2:0};
		};
		
		$scope.getCurrentPlayers = function() {
			$scope.currentPlayers = [];
			if (angular.isDefined($scope.newScore.j1) || angular.isDefined($scope.newScore.j2)) {
				angular.forEach($scope.players, function(row, index){
					if(angular.isDefined($scope.newScore.j1) && !angular.equals(row.nom, $scope.newScore.j1.nom) && 
					   angular.isDefined($scope.newScore.j2) && !angular.equals(row.nom, $scope.newScore.j2.nom)) {
						$scope.currentPlayers.push(row);
					}
				});
			}
			return $scope.currentPlayers;
		};
		
		$scope.$watch("newScore.j1", function(newVal, oldVal) {
			if(angular.isDefined(newVal)) {
				if(angular.isDefined(oldVal)) {
					$scope.playersCandidates2.push(oldVal);
				}
				angular.forEach($scope.playersCandidates2, function(row, index){
					if(angular.equals(newVal.nom, row.nom)) {
						$scope.playersCandidates2.splice(index, 1);
					}
				});
			} else {
				$scope.playersCandidates2.push(oldVal);
			}
		});
		
		$scope.startGame = function() {
			$scope.begin = true;
			$scope.scores = [];
			angular.forEach($scope.players, function(j1) {
				angular.forEach($scope.players, function(j2) {
					if (!angular.equals(j1.nom, j2.nom)) {
						$scope.scores.push({j1:j1, j2:j2, butJ1:0, butJ2:0, update: false});
					}
				});
			});
		};
  	}
]);