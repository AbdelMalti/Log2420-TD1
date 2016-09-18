var app = angular.module("app",[]);
app.controller("menuCtrl", function($scope, $http, $sce) {
		$http.get("menu.json").then(function(response) {
			$scope.menu = angular.forEach(response.data, function (menu, index, tableau) {
				tableau[index] = $sce.trustAsHtml(menu);
			});
		});
	});


 // Créer une application angular et ajouter un seul module pour tous les traitements
           var nom_application = angular.module("nom_module", []);

       // Ajouter un contrôleur pour la table des cours
           nom_application.controller("nom_controller_seances", ...

             );

       // Ajouter un 2è contrôleur pour le menu à la même application
           nom_application.controller("nom_controller_menu", function($scope, $http) {
                $http.get("menu.json").then(function(response) {
                        $scope.menu = response.data;
                        });
                });
        }
             );

