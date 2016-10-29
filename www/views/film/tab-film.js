define(['app'], function (app) {
	app.controller('FilmCtrl', FilmCtrl);

	FilmCtrl.$inject = ['$scope', '$http', '$state', '$ionicSlideBoxDelegate', '$ionicModal'];

	function FilmCtrl($scope, $http, $state, $ionicSlideBoxDelegate, $ionicModal) {
		var vm = this,
			sp = $scope;
		vm.filmType = 1;
		vm.topSlides = [{
			poster: 'img/duzhan.jpg'
		}, {
			poster: 'img/hobbit.jpg'
		}, {
			poster: 'img/xiuchundao.jpg'
		}];

		$http.get('http://localhost:3000/films/list').then(function (resp) {
			vm.films = resp.data.data;
		});
		
		$ionicModal.fromTemplateUrl('searchModal.html', {
			scope: sp,
			focusFirstInput: true
		}).then(function (modal) {
			vm.searchMCtrl = modal;
		})

		
		sp.sliderPagerClick = sliderPagerClick;
		sp.activeFilmType = activeFilmType;
		sp.openModal = openModal;
		sp.closeModal = closeModal;
		sp.search = search;
		sp.goDetail = goDetail;

		function sliderPagerClick(idx) {
			$ionicSlideBoxDelegate.$getByHandle('films-slide').slide(idx);
		}

		function activeFilmType(type) {
			// evt.stopPropagation();
			if (type !== vm.filmType) {
				vm.filmType = type;
			}
		}

		function openModal() {
			vm.searchMCtrl.show();
		}

		function closeModal() {
			vm.searchMCtrl.hide();
		}

		function search() {
			$http.get('api/searchFilms.json').then(function (resp) {
				this.searchRes = resp.data[this.searchKey];
			});
		}

		function goDetail() {
			$state.go('tab.filmDetail')
		}
	}
})