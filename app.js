angular.module('staffCalcApp', [])
	.controller('staffCalcCtrl', function($scope) {
		$scope.basePrice = 0;
		$scope.taxRate = 0;
		$scope.tipPercent = 0;
		$scope.subtotal = 0;
		$scope.tipAmount = 0;
		$scope.total = 0;
		$scope.tipTotal = 0;
		$scope.mealCount = 0;
		$scope.averageTip = 0;

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
		  $scope.mealCount++;
		  $scope.tipTotal += tipAmount;
		  $scope.averageTip = $scope.tipTotal / $scope.mealCount;
		};
	});