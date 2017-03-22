/* globals angular */
(() => {
  const app = angular.module('improv_cms')

  const navigationLinks = [
    {
      url: '/contact',
      label: 'Kontakt'
    }
  ]

  app.directive('footerElement', () => {
    return {
      restrict: 'E',
      templateUrl: 'footer/footer-element.html',
      scope: {
        link: '@',
        active: '@'
      },
      transclude: true
    }
  })

  app.directive('footer', () => {
    return {
      restrict: 'E',
      templateUrl: 'footer/view.html',
      controller: Controller,
      controllerAs: 'vm',
      scope: {}
    }
  })

  Controller.$inject = ['$scope', '$location']

  function Controller ($scope, $location) {
    let vm = this
    vm.elements = navigationLinks
  }
})()
