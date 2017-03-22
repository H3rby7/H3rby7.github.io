/* globals angular */
(() => {
  const app = angular.module('improv_cms')

  app.controller('loginCtrl', ctrl)

  ctrl.$inject = ['$scope']

  function ctrl ($scope) {
    $scope.location = 'login'
  }

  app.directive('login', () => {
    return {
      templateUrl: 'views/login/view.html',
      controller: 'loginCtrl'
    }
  })
})()
