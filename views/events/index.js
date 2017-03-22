/* globals angular */
(() => {
  const app = angular.module('improv_cms')

  app.controller('eventsCtrl', ctrl)

  app.directive('events', () => {
    return {
      templateUrl: 'views/events/view.html',
      controller: 'eventsCtrl'
    }
  })

  const typeToName = {
    crime: 'Krimi',
    long: 'Storytime',
    show: 'Die Show'
  }

  const typeToImg = {
    crime: 'images/crime.png',
    long: 'images/langform.png',
    show: 'images/show.png'
  }

  ctrl.$inject = ['$scope', '$location']

  function ctrl ($scope, $location) {
    $scope.location = 'events'
    $scope.events = returnSamples(10)
    $scope.types = $location.search()
  }

  function returnSamples (count) {
    const types = ['crime', 'long', 'show']
    const dates = ['29. Februar 2017, 20:00 - 22:00', '9. Februar 2017, 20:00 - 22:00', '05. März 2017, 20:00 - 22:00']
    const locations = ['Kulturzentrum Merlin', 'JuHa West', 'Theater Atelier', 'Hochschule der Medien']

    const results = []
    let i
    for (i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * 3)]
      results.push({
        imageUrl: typeToImg[type],
        type: type,
        name: typeToName[type],
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
