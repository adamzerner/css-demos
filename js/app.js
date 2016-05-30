angular
  .module('cssDemos', [])
  .run(run)
  .controller('IndexCtrl', IndexCtrl)
  .directive('demo', demo)
;

function run($anchorScroll, $timeout, $location) {
  $timeout(function () {
    if ($location.hash()) {
      $anchorScroll($location.hash());
    }
  }, 0);
}

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
      }

      if ($scope.attrs && $scope.attrs.htmlFile) {
        $scope.anchor = hash($scope.attrs.htmlFile);
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

      function hash(str) {
        var hash = 0;
        var i;
        var chr;
        var len;
        if (str.length === 0) return hash;
        for (i = 0, len = str.length; i < len; i++) {
          chr   = str.charCodeAt(i);
          hash  = ((hash << 5) - hash) + chr;
          hash |= 0; // Convert to 32bit integer
        }

        return hash;
      }
    },

    templateUrl: 'js/demo.directive.html',
  };
}
