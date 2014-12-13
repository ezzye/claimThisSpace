'use strict';

angular.module('mean.claimthisspace').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('claimthisspace example page', {
      url: '/claimthisspace/example',
      templateUrl: 'claimthisspace/views/index.html'
    });
  }
]);
