(function(){

	var app = angular.module('store', ['cart', 'ngRoute']);

	app.factory('weatherService', ['$http', function(http){
		return {
			data: null,
			getActual: function(){

				var scope = this;
				//return http.get('http://api.openweathermap.org/data/2.5/weather?q=Gdansk,pl').success(function(data){
				//	scope.data = data;
				//});
				return http.get('js/mockAPI.json').success(function(data){
					scope.data = data;
				});
			}
		}
	}]);

	app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'shop.html',
                controller  : 'shopController'
            })
            .when('/weather', {
                templateUrl : 'weather.html',
                controller  : 'weatherController'
            })
    });

	app.directive('shop', function(){
		return {
			restrict: "E",
			controller: 'shopController',
			templateUrl: "shop.html"
		}
	});

	app.directive('header', function(){
		return {
			restrict: "E",
			templateUrl: "header.html"
		}
	});

	app.filter('celsius', function() {
	 	return function(value) {
	    	return parseInt(value -273);
	  	};
	});

	app.controller('weatherController', ['$scope', 'weatherService', function(scope, weather){
		weather.getActual();
		scope.weather = weather;
	}]);

	app.controller('shopController', ['$scope', function(scope){
		scope.tab = 1;
		scope.socks = socks;
		scope.actualSock = socks[0];
		scope.actualStars = actualStars;
		scope.form = {};
		
		scope.setStars = function(id, value){
			actualStars[id] = value;
		}
		
		scope.actualSock = function(thatSock, author, comment){
			scope.actualSock = socks[0];
			console.log(thatSock, author, comment);
			for(var s in socks){
				if(s.name === thatSock)
					scope.actualSock=s;
			}
			reviews.push({stars: 4, author: author, text: comment });
			s.reviews.push(reviews[length-1]);
		}

		scope.saveComment = function(){
			console.log(scope.form.author, scope.form.comment, scope.actualStars);

		};
	}]);
	
	var actualStars = [
		
	]
	
	var reviews = [
		{
			stars: 4,
			author: "Jeremy",
			text: "I love that one, my partner says I look sexy at those."
		},
		{
			stars: 0,
			author: "Anonymous",
			text: "send this to 5 people or you will be dead"
		},
		{
			stars: 2,
			author: "Troll",
			text: "BLAH BLAH BlAH! IM MASZTAROWSKI BLAH!"
		}
	];

	var socks = [
		{
			name: 'Red socks',
			description: 'lovely reddish socks',
			price: 2.05,
			img: "red.jpg",
			reviews: [reviews[0]]
		},
		{
			name: 'Blue socks',
			description: 'lovely bluish socks',
			price: 3.52,
			img: "blue.jpg",
			reviews: [reviews[1]]
		},
		{
			name: 'Colorful socks',
			description: 'lovely colorful socks',
			price: 5.55,
			img: "colorful.jpg",
			reviews: [reviews[2]]
		}
	];

})();
