/* globals angular */
(() => {
  const app = angular.module('improv_cms')

  app.controller('storyLandingCtrl', ctrl)

  ctrl.$inject = ['$scope']

  function ctrl ($scope) {
    $scope.location = 'start'
  }

  app.directive('storyLanding', () => {
    return {
      templateUrl: 'views/storyLanding/view.html',
      controller: 'storyLandingCtrl'
    }
  })

})()
