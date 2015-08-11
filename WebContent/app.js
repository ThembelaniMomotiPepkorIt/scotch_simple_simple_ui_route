var routeApp = angular.module('routeApp',['ui.router']);

routeApp.controller('HomeListController', function($scope){
	$scope.dogs = ['Poodle','Jack Russel','German Shepherd'];
});

routeApp.controller('scotchController', function($scope){
	$scope.message = 'test';
	$scope.scotches = [
	                   {
	                	   name: 'Macallan 12',
	                	   price: 50
	                   },
	                   {
	                	  name:'Chivas Regal Royal Salute',
	                	  price: 10000
	                   },
	                   {
	                	   name:'glenfiddish 1937',
	                	   price: 20000
	                   }
	                   ];
});

routeApp.controller('contactController', function($scope){
	$scope.details = {
		name : 'sometutorial.inc',
		telephone : '0711946513',
		email : 'thembelani@digital.pepkorit.com'
	};
});

routeApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home',{
			url: '/home',
			templateUrl: 'partial-home.html'
		})	
		.state('home.list', {
			url: '/list',
			templateUrl : 'partial-home-list.html',
			controller : 'HomeListController'
				
		})
		.state('home.paragraph', {
			url : '/paragraph',
			template: 'I could sure use a drink right now.'
		})
		
		.state('about',{
			url: '/about',
			views : {
				''			     : {templateUrl:'partial-about.html'},
				'columnOne@about': {templateUrl:'contact-data.html',
									controller: 'contactController'
									},
				'columnTwo@about': {templateUrl:'table-data.html',
					                controller:'scotchController'
					                }
			}
		});
		
});