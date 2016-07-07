{
  angular
    .module('meganote.layout')
    .directive('myHeader', myHeader);

  function myHeader() {
    return {
      restrict: 'AE',
      templateUrl: 'layout/header.html',
      scope: {}
    };
  }
}
