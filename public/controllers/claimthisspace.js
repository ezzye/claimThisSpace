'use strict';

angular.module('mean.claimthisspace').controller('ClaimthisspaceController', ['$scope', 'Global', 'Claimthisspace',
  function($scope, Global, Claimthisspace) {
    $scope.global = Global;
    $scope.package = {
      name: 'claimthisspace'
    };
  }
]);
