var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){
	$scope.teamData = teamData;
	console.log($scope.teamData);
	$scope.newGame = {};
	$scope.showNewGameForm = false;
	function $scope.toggleNewGameForm() {
		$scope.showNewGameForm = !$scope.showNewGameForm;
	}
	if ($routeParams === 'utahjazz') {
		
	}
});