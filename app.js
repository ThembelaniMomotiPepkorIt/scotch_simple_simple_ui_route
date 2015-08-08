var routeApp = angular.module('routeApp',['ui-router']);

routeApp.controller('HomeListController', function($scope){
	$scope.dogs = ['German Sheperd','Poodle','Jack Russel'];
});

//routeApp.controller('')

routeApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home',{
			url: '/home',
			templateUrl: 'partial-home.html'
		})
		.state('home.list',{
			url :'/list',
			template : 'partial-home-list.html',
			controller : 'HomeListController'
		})
		.state('home-paragraph', {
			url: '/paragraph',
			template :'I could use a drink right now'
		})
		
		.state('about',{
			url: '/about',
			templateUrl : 'partial-about.html'
		});
		
});