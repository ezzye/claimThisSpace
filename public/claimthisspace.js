'use strict';

angular.module('mean.claimthisspace', ['mean.system'])
.config(['$viewPathProvider', function($viewPathProvider) {
  $viewPathProvider.override('system/views/index.html', 'claimthisspace/views/index.html');
}]);
