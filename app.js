/* globals angular */
(() => {
  const app = angular.module('improv_cms', [
    'ngRoute',
    'ui.bootstrap'
  ])
  
  const validViews = [
    {
      url: '',
      name: 'start'
    },
    {
      url: 'story',
      name: 'storyLanding'
    },
    {
      url: 'event/:id',
      name: 'viewEvent'
    },
    {
      url: 'events',
      name: 'events'
    },
    {
      url: 'gallery',
      name: 'gallery'
    },
    {
      url: 'videos',
      name: 'videos'
    },
    {
      url: 'contact',
      name: 'contact'
    },
    {
      url: 'login',
      name: 'login'
    },
    {
      url: '404',
      name: 'e404'
    }
  ]

  app.config(function ($routeProvider, $locationProvider) {
    let v
    for (v in validViews) {
      let obj = validViews[v]
      $routeProvider
        .when('/' + obj.url, {
          templateUrl: './views/' + obj.name + '/view.html',
          controller: obj.name + 'Ctrl'
        })
    }
    $routeProvider.otherwise({
      templateUrl: './views/e404/view.html'
    })
    $locationProvider.html5Mode(true)
  })
})()
