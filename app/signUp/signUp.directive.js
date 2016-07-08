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
            if (this.user.password === this.user.passwordConfirmation) {
              UsersService.create(this.user);
            }
            else {
              console.log('Passwords don\'t match!');
            }
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
