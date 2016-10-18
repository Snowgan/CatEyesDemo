require.config({
	baseUrl: './',
	paths: {
		'ionic-bundle': 'lib/ionic/js/ionic.bundle',
		'app': 'js/app'
	}
});

require(['app'], function () {
	angular.bootstrap(document, ['catEyes']);
})