define(['app'], function (app) {
	app.controller('FindCtrl', FindCtrl);

	FindCtrl.$inject = ['$scope', '$http', '$ionicSlideBoxDelegate'];

	function FindCtrl($scope, $http, $ionicSlideBoxDelegate) {
		var vm = this,
			sp = $scope;
		$http.get('api/topics.json').then(function (resp) {
			vm.topicsOne = resp.data[0];
			vm.topicsTwo = resp.data[1];
		});

		
	}
})