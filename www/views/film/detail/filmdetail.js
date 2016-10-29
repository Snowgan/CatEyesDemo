define(['app'], function (app) {
	app.controller('FilmDetailCtrl', FilmDetailCtrl);

	FilmDetailCtrl.$inject = ['$scope', '$http', '$state', '$ionicSlideBoxDelegate', '$ionicModal'];

	function FilmDetailCtrl($scope, $http, $state, $ionicSlideBoxDelegate, $ionicModal) {
		var vm = this,
			sp = $scope;
		
		vm.add = function () {
			$http.post('http://localhost:3000/films', [{
				"poster": "img/linewalker.jpg", 
				"title": "使徒行者",
				"audiRate": 6.9,
				"proRate": 4.3,
				"infoDetail": "卧底阿钉（佘诗曼 饰）收到了一条神秘短信，追溯到神秘人郭铭的犯罪集团，其手下两名重臣少爷（古天乐 饰）和阿蓝（张家辉 饰）很可能是之前警队失联的卧底。而在捣灭犯罪集团的过程中，其中一人暴露身份也使这对情同手足的好兄弟陷入信任和生命危机。而卧底联络人Q Sir（吴镇宇 饰）和卧底阿钉也面多重危难。在迷雾中，一场激战蓄势待发……",
				"playinfo": {
					"theaterNum": 130,
					"playNum": 1101
				}			
			}, {
				"poster": "img/sstorm.jpg", 
				"title": "反贪风暴Ⅱ",
				"audiRate": 4.9,
				"infoDetail": "马会的球赛博彩操盘手被独行杀手（周渝民 饰）杀害，目击证人竟是廉署首席调查主任陆志廉（古天乐 饰）……",
				"playinfo": {
					"theaterNum": 107,
					"playNum": 787
				}
			}, {
				"poster": "img/saodu.jpg", 
				"title": "扫毒",
				"audiRate": 7.3,
				"proRate": 6.6,
				"infoDetail": "从小一起长大的好兄弟马昊天（刘青云 饰）、张子伟（张家辉 饰）和 苏建秋（古天乐 饰）共同效力于警队扫毒科……",
				"playinfo": {
					"theaterNum": 30,
					"playNum": 122
				}
			}, {
				"poster": "img/gooddad.jpg", 
				"title": "一个好爸爸",
				"audiRate": 8.8,
				"proRate": 7.2,
				"infoDetail": "李天恩（古天乐 饰）少年时代便喜欢打架，后来成为了江湖老大，他与母亲恩妈（苗可秀 饰）互相斗嘴，是他们一贯的相处方式……",
				"playinfo": {
					"theaterNum": 58,
					"playNum": 835
				}
			}]);
		}
		vm.delete = function () {
			$http.post('http://localhost:3000/films/delete');
		}
	}
})