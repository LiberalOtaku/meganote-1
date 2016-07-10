{
  angular
    .module('meganote.layout')
    .directive('myHeader', myHeader);

  function myHeader() {
    return {
      restrict: 'AE',
      templateUrl: 'layout/header.html',
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {}
    };
  }

  NavbarController.$inject = ['AuthToken'];
  function NavbarController(AuthToken) {
    var vm = this;

    vm.isLoggedIn = AuthToken.get;
    vm.logout = AuthToken.clear;
  }
}
