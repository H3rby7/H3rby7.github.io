/* globals angular */
(() => {
  const app = angular.module('improv_cms')

  app.directive('ngImage', () => {
    return {
      restrict: 'E',
      templateUrl: 'elements/image.html',
      scope: {
        imageUrl: '@',
        hoverEffect: '@'
      },
      transclude: true
    }
  })

  app.directive('ngVideo', () => {
    controller.$inject = ['$scope', '$uibModal']

    return {
      restrict: 'E',
      templateUrl: 'elements/video.html',
      scope: {
        thumbUrl: '@',
        videoUrl: '@',
        title: '@',
        description: '@'
      },
      controller
    }

    function controller ($scope, $uibModal) {
      $scope.openModal = openModal

      function openModal () {
        const instance = $uibModal.open({
          template: `<div class="video_modal">
                       <yt-container url="${$scope.videoUrl}" auto-play="true"></yt-container>
                     </div>`,
          size: 'lg',
          scope: $scope
        })
        instance.result.then(function (result) {
          console.log('modal closed')
        }, function (reason) {
          console.log('modal dismissed')
        })
      }
    }
  })

  app.directive('ytContainer', () => {
    controller.$inject = ['$scope', '$sce']

    return {
      restrict: 'E',
      templateUrl: 'elements/yt-container.html',
      scope: {
        source: '@url',
        autoPlay: '@'
      },
      controller
    }

    function controller ($scope, $sce) {
      let source = $scope.source
      if (source.indexOf('embed') < 0) {
        source = source.replace('watch?v=', 'embed/') + '?ecver=1'
      }
      if (source.indexOf('?') < 0) {
        source += '?'
      }
      if ($scope.autoPlay) source += 'autoplay=1'
      $scope.url = $sce.trustAsResourceUrl(source)
    }
  })

  app.directive('event', () => {
    return {
      restrict: 'E',
      templateUrl: 'elements/event.html',
      scope: {
        imageUrl: '@',
        type: '@',
        name: '@',
        date: '@',
        location: '@',
        ticketLink: '@'
      },
      transclude: true
    }
  })
})()
