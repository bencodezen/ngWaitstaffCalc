angular.module('staffCalcApp', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl : 'home.html',
			controller : 'HomeCtrl'
		})
		.when('/add-meal', {
			templateUrl : 'add-meal.html',
			controller : 'staffCalcCtrl'
		})
		.when('/view-earnings', {
			templateUrl : 'view-earnings.html',
			controller : 'staffCalcCtrl'
		}).otherwise({
			redirectTo : '/'
		});
	}])
	.controller('HomeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
		$rootScope.mealCount = 0;
		$rootScope.tipTotal = 0;
		$rootScope.averageTip = 0;
	}])
	.controller('staffCalcCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
		$scope.basePrice = 0;
		$scope.taxRate = 0;
		$scope.tipPercent = 0;
		$scope.subtotal = 0;
		$scope.tipAmount = 0;
		$scope.total = 0;

		$scope.calcSubtotal = function(basePrice, taxRate) {
			return basePrice + (basePrice * taxRate);
		};

		$scope.calcTip = function(basePrice, tipPercent) {
			return basePrice * tipPercent;
		};

		$scope.inputMeal = function() {
		  var basePrice = $scope.basePrice;
		  var taxPercent = $scope.taxRate / 100;
		  var tipPercent = $scope.tipPercent / 100;
		  var subtotal = $scope.calcSubtotal(basePrice, taxPercent);
		  var tipAmount = $scope.calcTip(basePrice, tipPercent);
		  $scope.subtotal = subtotal;
		  $scope.tipAmount = tipAmount;
		  $scope.total = subtotal + tipAmount;
		  $rootScope.mealCount++;
		  $rootScope.tipTotal += tipAmount;
		  $rootScope.averageTip = $rootScope.tipTotal / $rootScope.mealCount;
		};

		$scope.cancel = function() {
			$scope.basePrice = 0;
			$scope.taxRate = 0;
			$scope.tipPercent = 0;
		};

		$scope.reset = function() {
			$scope.cancel();
			$scope.subtotal = 0;
			$scope.tipAmount = 0;
			$scope.total = 0;
			$rootScope.tipTotal = 0;
			$rootScope.mealCount = 0;
			$rootScope.averageTip = 0;
		};
	}]);