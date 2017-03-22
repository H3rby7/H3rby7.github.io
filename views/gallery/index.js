/* globals NsMasonry angular */
(() => {
  const app = angular.module('improv_cms')

  app.controller('galleryCtrl', ctrl)

  ctrl.$inject = ['$scope']

  function ctrl ($scope) {
    $scope.location = 'gallery'
    $scope.images = []

    let masonry = new NsMasonry({
      containerId: 'nsMasonry',
      colWidth: 248,
      rowHeight: 186,
      animate: true,
      autoResize: true
    })

    init()

    function init () {

      $scope.images = [
        {"url": "images/gallery/008.jpg", "width": " width2", "height": " height2"},
        {"url": "images/gallery/001.jpg", "width": "", "height": ""},
        {"url": "images/gallery/002.jpg", "width": "", "height": ""},
        {"url": "images/gallery/003.jpg", "width": "", "height": " height2"},
        {"url": "images/gallery/004.jpg", "width": "", "height": ""},
        {"url": "images/gallery/005.jpg", "width": "", "height": ""},
        {"url": "images/gallery/006.jpg", "width": " width2", "height": " height3"},
        {"url": "images/gallery/009.jpg", "width": "", "height": " height2"},
        {"url": "images/gallery/010.jpg", "width": "", "height": " height2"},
        {"url": "images/gallery/011.jpg", "width": "", "height": ""},
        {"url": "images/gallery/012.jpg", "width": " width2", "height": " height3"},
        {"url": "images/gallery/013.jpg", "width": "", "height": ""},
        {"url": "images/gallery/014.jpg", "width": "", "height": ""},
        {"url": "images/gallery/015.jpg", "width": "", "height": ""},
        {"url": "images/gallery/025.jpg", "width": "", "height": " height2"},
        {"url": "images/gallery/016.jpg", "width": "", "height": ""},
        {"url": "images/gallery/017.jpg", "width": "", "height": ""},
        {"url": "images/gallery/007.jpg", "width": "", "height": ""},
        {"url": "images/gallery/018.jpg", "width": "", "height": ""},
        {"url": "images/gallery/019.jpg", "width": " width2", "height": "height3"},
        {"url": "images/gallery/020.jpg", "width": "", "height": ""},
        {"url": "images/gallery/021.jpg", "width": "", "height": ""},
        {"url": "images/gallery/022.jpg", "width": " width2", "height": ""},
        {"url": "images/gallery/023.jpg", "width": "", "height": ""},
        {"url": "images/gallery/024.jpg", "width": "", "height": " height2"},
        {"url": "images/gallery/026.jpg", "width": "", "height": ""},
        {"url": "images/gallery/027.jpg", "width": "", "height": ""},
        {"url": "images/gallery/028.jpg", "width": "", "height": ""},
        {"url": "images/gallery/029.jpg", "width": "", "height": ""},
        {"url": "images/gallery/030.jpg", "width": "", "height": ""},
        {"url": "images/gallery/031.jpg", "width": "", "height": ""},
        {"url": "images/gallery/032.jpg", "width": "", "height": ""}
      ]

      tryUpdate()

      function tryUpdate () {
        masonry.update()
        if (masonry.itemCount === 0) {
          setTimeout(tryUpdate, 100)
        }
      }
    }
  }

  app.directive('gallery', () => {
    return {
      templateUrl: 'views/gallery/view.html',
      controller: 'galleryCtrl'
    }
  })
})()
