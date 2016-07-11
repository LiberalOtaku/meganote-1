{
  angular
    .module('meganote.signIn')
    .directive('mySignIn', [
      '$state',
      'UsersService',
      ($state, UsersService) => {

        class SignInController {
          submit() {
            var vm = this;
            UsersService
              .login(vm.user)
              .then(() => $state.go('notes.form', { noteId: undefined }));
          }
        }

        return {
          restrict: 'EA',
          templateUrl: 'signIn/signIn.html',
          controller: SignInController,
          controllerAs: 'vm',
          bindToController: true,
          scope: {},
        };
      }]);
}
