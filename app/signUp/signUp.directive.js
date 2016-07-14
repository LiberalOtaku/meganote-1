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
            var vm = this;
            vm.loading = true;
            UsersService
              .create(vm.user)
              .then(() => $state.go('notes.form', { noteId: undefined }))
              .catch(error => Flash.create('danger', error.data.message))
              .finally(() => vm.loading = false);
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
