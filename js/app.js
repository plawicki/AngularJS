(function(){

	var app = angular.module('store', ['cart']);

	app.directive('shop', function(){
		return {
			restrict: "E",
			controller: 'shopController',
			templateUrl: "shop.html"
		}
	});

	app.controller('shopController', ['$scope', function(scope){
		scope.tab = 1;
		scope.socks = socks;
		scope.actualStars = actualStars;
		
		scope.setStars = function(id, value){
			actualStars[id] = value;
		}
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