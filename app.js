var routeApp = angular.module('routeApp',['ui-router']);


routeApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home',{
			url: '/home',
			templateUrl: 'partial-home.html'
		})
		
		.state('about',{
			url: '/about',
			templateUrl : 'partial-about.html'
		});
		
});