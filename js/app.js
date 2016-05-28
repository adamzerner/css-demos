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
      if ($scope.key) {
        $scope.safeKey = $sce.trustAsHtml($scope.key);
      }

      if ($scope.attrs && $scope.attrs.title) {
        $scope.safeTitle = $sce.trustAsHtml($scope.attrs.title);
      }
    },

    templateUrl: 'js/demo.directive.html',
  };
}
