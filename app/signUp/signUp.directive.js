{
  angular
    .module('meganote.signUp')
    .directive('mySignUp', [
      '$state',
      'Flash',
      'UsersService',
      ($state, Flash, UsersService) => {

        class SignUpController {
          constructor() {
            this.user = {};
          }

          submit() {
            UsersService
              .create(this.user)
              .then(() => $state.go('notes.form', { noteId: undefined }))
              .catch(error => Flash.create('danger', error.data.message));
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
