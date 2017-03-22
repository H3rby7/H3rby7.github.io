/* globals angular */
(() => {
  const app = angular.module('improv_cms')

  app.directive('e404', () => {
    return {
      templateUrl: 'views/e404/view.html'
    }
  })
})()
