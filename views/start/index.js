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

  app.directive('startStart', () => {
    return {
      templateUrl: 'views/start/start.html'
    }
  })

  app.directive('startUs', () => {
    return {
      templateUrl: 'views/start/improv_and_us.html'
    }
  })

  app.directive('startOffers', () => {
    return {
      templateUrl: 'views/start/offers.html'
    }
  })


})()
