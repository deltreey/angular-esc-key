'use strict';
var app = angular.module('app', [ 'esc-key' ]);

app.controller('MainCtrl', function ($scope) {
	$scope.doStuff = function () {
		alert('stuff done');
	};
});
