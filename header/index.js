/* globals angular */
(() => {
  const app = angular.module('improv_cms')

  const navigationLinks = [
    {
      url: '/',
      label: 'Start'
    },
    {
      url: '/events',
      label: 'Termine'
    },
    {
      url: '/gallery',
      label: 'Bilder'
    },
    {
      url: '/videos',
      label: 'Videos'
    }
  ]

  app.directive('navigationPoint', () => {
    return {
      restrict: 'E',
      templateUrl: 'header/navigation-point.html',
      scope: {
        link: '@',
        active: '@'
      },
      transclude: true
    }
  })

  app.directive('burgernavPoint', () => {
    return {
      restrict: 'E',
      templateUrl: 'header/burgernav-point.html',
      scope: {
        link: '@',
        active: '@'
      },
      transclude: true
    }
  })


  app.directive('header', () => {
    return {
      restrict: 'E',
      templateUrl: 'header/view.html',
      controller: Controller,
      controllerAs: 'vm'
    }
  })

  Controller.$inject = ['$scope', '$location']

  function Controller ($scope, $location) {
    let vm = this
    vm.isActive = isActive
    vm.burgerMenuOpen = false
    vm.nav = navigationLinks
    vm.toggleBurgerMenu = toggleBurgerMenu

    function toggleBurgerMenu() {
      vm.burgerMenuOpen = !vm.burgerMenuOpen
      console.log(vm.burgerMenuOpen)
    }

    function isActive (link) {
      return link === $location.path()
    }
  }
})()
