angular.module('staffCalcApp', [])
	.controller('staffCalcCtrl', function($scope) {
		$scope.basePrice = 0;
		$scope.taxRate = 0;
		$scope.tipPercent = 0;
		$scope.subtotal = 0;
		$scope.tipAmount = 0;
		$scope.total = 0;

		$scope.calcSubtotal = function(basePrice, taxRate) {
			$scope.subtotal = basePrice + (basePrice * (taxRate / 100));
		};
		$scope.calcTip = function(basePrice, tipPercent) {
			$scope.tipAmount = basePrice * (tipPercent / 100);
		};

		$scope.inputMeal = function() {
		  $scope.calcSubtotal($scope.basePrice, $scope.taxRate);
		  $scope.calcTip($scope.basePrice, $scope.taxRate);
		  $scope.total = $scope.subtotal + $scope.tipAmount;
		};
	});