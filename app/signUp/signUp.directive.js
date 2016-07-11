{
  angular
    .module('meganote.signUp')
    .directive('mySignUp', [
      '$state',
      'UsersService',
      ($state, UsersService) => {

        class SignUpController {
          constructor() {
            this.user = {};
          }

          submit() {
            UsersService
              .create(this.user)
              .then(() => $state.go('notes.form', { noteId: undefined }));
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
