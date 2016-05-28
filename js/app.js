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
      $scope.collapsed = false;

      if ($scope.key) {
        $scope.safeKey = $sce.trustAsHtml($scope.key);
      }

      if ($scope.attrs && $scope.attrs.title) {
        $scope.safeTitle = $sce.trustAsHtml($scope.attrs.title);
      }

      $scope.toggle = function () {
        $scope.collapsed = !$scope.collapsed;
      };
    },

    templateUrl: 'js/demo.directive.html',
  };
}
