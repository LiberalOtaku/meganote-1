{
  angular
    .module('meganote.signUp')
    .directive('mySignUp', () => {
      class SignUpController {
        constructor() {
          this.user = {};
        }

        submit() {
          console.log(this.user);
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
    });
}
