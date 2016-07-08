{
  angular
    .module('meganote.signUp')
    .directive('mySignUp', [
      'UsersService',
      (UsersService) => {

        class SignUpController {
          constructor() {
            this.user = {};
          }

          submit() {
            UsersService.create(this.user);
          }
        }

        return {
          restrict: 'EA',
          templateUrl: 'signUp/signUp.html',
          controller: SignUpController,
          controllerAs: 'vm',
          bindToController: true,
          scope: {},
        };
      }]);
}
