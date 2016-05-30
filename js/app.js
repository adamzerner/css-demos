angular
  .module('cssDemos', [])
  .controller('IndexCtrl', IndexCtrl)
  .directive('demo', demo)
;

function IndexCtrl(demos) {
  var vm = this;
  vm.demos = demos;
}

function demo() {
  return {
    restrict: 'E',
    scope: {
      attrs: '=',
      key: '=',
    },
    controller: function ($scope, $sce) {
      var youtubeId;
      var embedSrc;
      var codepenId;
      var codePenEmbedSrc;

      $scope.childrenCollapsed = false;
      $scope.youTubeAndCodePenCollapsed = true;

      if ($scope.key) {
        $scope.safeKey = $sce.trustAsHtml($scope.key);
      }

      if ($scope.attrs && $scope.attrs.title) {
        $scope.safeTitle = $sce.trustAsHtml($scope.attrs.title);
        $scope.anchor = encodeURIComponent($scope.attrs.title)
                          .toLowerCase()
                          .replace(/%20/g, '-')
                          .replace(/%3ccode%3e/g, '')
                          .replace(/%3c%2fcode%3e/g, '');
        console.log($scope.anchor);
      }

      if ($scope.attrs && $scope.attrs.youtube) {
        youtubeId = $scope.attrs.youtube.split('=')[1];
        embedSrc = 'https://www.youtube.com/embed/' + youtubeId;
        $scope.safeEmbedSrc = $sce.trustAsResourceUrl(embedSrc);
      }

      if ($scope.attrs && $scope.attrs.codePen) {
        codepenId = $scope.attrs.codePen.split('/')[5].split('?')[0];
        $scope.codepenId = codepenId;
        codePenEmbedSrc = '//codepen.io/adamzerner/embed/' + codepenId + '/?height=315&theme-id=0&default-tab=html,result&embed-version=2';
        $scope.safeCodePenEmbedSrc = $sce.trustAsResourceUrl(codePenEmbedSrc);
      }

      $scope.toggleChildrenCollapsed = function () {
        $scope.childrenCollapsed = !$scope.childrenCollapsed;
      };

      $scope.toggleYouTubeAndCodePenCollapsed = function () {
        $scope.youTubeAndCodePenCollapsed = !$scope.youTubeAndCodePenCollapsed;
      };

    },

    templateUrl: 'js/demo.directive.html',
  };
}
