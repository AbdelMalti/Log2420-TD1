var app = angular.module("app",[]);
app.controller("menuCtrl", function($scope, $http, $sce) {
		$http.get("menu.json").then(function(response) {
			$scope.menu = angular.forEach(response.data, function (menu, index, tableau) {
				tableau[index] = $sce.trustAsHtml(menu);
			});
		});
	});

