/* globals angular */
(() => {
  const app = angular.module('improv_cms')

  app.controller('startCtrl', ctrl)

  ctrl.$inject = ['$scope']

  function ctrl ($scope) {
    $scope.location = 'start'
  }

  app.directive('start', () => {
    return {
      templateUrl: 'views/start/view.html',
      controller: 'startCtrl'
    }
  })
})()
