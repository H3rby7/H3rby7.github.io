/* globals angular */
(() => {
  const app = angular.module('improv_cms')

  app.controller('viewEventCtrl', ctrl)

  app.directive('viewEvent', () => {
    return {
      templateUrl: 'views/viewEvent/view.html',
      controller: 'viewEventCtrl'
    }
  })

  ctrl.$inject = ['$scope', '$route']

  function ctrl ($scope, $route) {
    $scope.location = 'view-event'
    let events = returnSamples(5)
    $scope.event = events[$route.current.params.id]
  }

  function returnSamples (count) {
    const urls = ['images/show.png', 'images/langform.png', 'images/crime.png']
    const names = ['Die Show', 'Kanonenfutter Nacht', 'Battle', 'Pitch that Show!']
    const dates = ['29. Februar 2017, 20:00 - 22:00', '9. Februar 2017, 20:00 - 22:00', '05. März 2017, 20:00 - 22:00']
    const locations = ['Kulturzentrum Merlin', 'JuHa West', 'Theater Atelier', 'Hochschule der Medien']

    const results = []
    let i
    for (i = 0; i < count; i++) {
      results.push({
        imageUrl: urls[Math.floor(Math.random() * 3)],
        name: names[Math.floor(Math.random() * 4)],
        date: dates[Math.floor(Math.random() * 3)],
        location: locations[Math.floor(Math.random() * 4)],
        ticketLink: '/event/' + i,
        id: i
      }
      )
    }

    return results
  }
})()
