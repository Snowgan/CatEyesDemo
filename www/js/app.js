define(['ionic-bundle'], function () {
	var app = angular.module('catEyes', ['ionic']);

	app
	  .config(providerConf)
	  .config(routersConf);

	providerConf.$inject = ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$stateProvider', '$urlRouterProvider'];
	function providerConf($controllerProvider, $compileProvider, $filterProvider, $provide) {
		app.controller = $controllerProvider.register;
    	app.directive = $compileProvider.directive;
    	app.filter = $filterProvider.register;
    	app.factory = $provide.factory;
    	app.service = $provide.service;
    	app.provider = $provide.provider;
    	app.value = $provide.value;
    	app.constant = $provide.constant;
    	app.decorator = $provide.decorator;
	}

	routersConf.$inject = ['$stateProvider', '$urlRouterProvider'];
	function routersConf($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('tab', {
				url: '/tab',
    			abstract: true,
    			templateUrl: 'views/tabs.html'
			})
			.state('tab.film', {
			    url: '/film',
			    views: {
			    	'tab-film': {
						templateUrl: 'views/film/tab-film.html',
						controller: 'FilmCtrl',
						controllerAs: 'data',
						resolve: load(['views/film/tab-film'])
					}
			    }
			})
			.state('tab.filmDetail', {
				url: '/filmdetail',
    			// templateUrl: 'views/film/detail/filmdetail.html'
    			views: {
    				'tab-film': {
    					templateUrl: 'views/film/detail/filmdetail.html'
    				}
    			}
			})
			.state('tab.find', {
			    url: '/find',
			    views: {
			    	'tab-find': {
						templateUrl: 'views/find/tab-find.html',
						controller: 'FindCtrl',
						controllerAs: 'data',
						resolve: load(['views/find/tab-find'])
					}
			    }
			})

		$urlRouterProvider.otherwise('/tab/film');
	}

	function load(srcs) {
		return {
			deps: ['$q', 
				function ($q) {
					var deferred = $q.defer();
					if (typeof(srcs) === 'string') {
						srcs = [srcs];
					}

					require(srcs, function () {
						deferred.resolve();
					})
					return deferred.promise;
				}
			]
		}
	}

	return app;
})