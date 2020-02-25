var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'views/dashboard.html',
		controller:'dashboardCtrl'
	})

	.when('/produtos',{
		templateUrl:'views/produtos.html',
		controller:'produtosCtrl'
	})

	.when('/cadastro',{
		templateUrl:'views/cadastro.html',
		controller:'cadastroCtrl'
	})

	.otherwise({redirectTo: '/'});
}]);