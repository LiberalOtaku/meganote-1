{
  angular
    .module('meganote.signIn')
    .directive('mySignIn', [
      '$state',
      'Flash',
      'UsersService',
      ($state, Flash, UsersService) => {

        class SignInController {
          submit() {
            var vm = this;
            vm.loading = true;
            UsersService
              .login(vm.user)
              .then(() => $state.go('notes.form', { noteId: undefined }))
              .catch(error => Flash.create('danger', error.message))
              .finally(() => vm.loading = false);
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
