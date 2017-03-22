/* globals angular */
(() => {
  const app = angular.module('improv_cms')

  app.controller('contactCtrl', ctrl)

  ctrl.$inject = ['$scope']

  function ctrl ($scope) {
    $scope.location = 'contact'
    $scope.submit = submit
    $scope.formIsValid = formIsValid
    $scope.form = {
      name: '',
      email: '',
      subject: '',
      test: ''
    }

    function submit () {
      if (!formIsValid()) return
      console.log('submit')
    }

    function formIsValid () {
      return false
    }
  }

  app.directive('contact', () => {
    return {
      templateUrl: 'views/contact/view.html',
      controller: 'contactCtrl'
    }
  })
})()
