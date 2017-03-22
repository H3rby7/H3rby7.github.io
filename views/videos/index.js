/* globals angular */
(() => {
  const app = angular.module('improv_cms')

  app.controller('videosCtrl', ctrl)

  ctrl.$inject = ['$scope']

  function ctrl ($scope) {
    $scope.location = 'videos'
  }

  app.directive('videos', () => {
    return {
      templateUrl: 'views/videos/view.html',
      controller: 'videosCtrl'
    }
  })
})()
