{
  angular
    .module('meganote.users')
    .directive('userLinks', [
      'CurrentUser',
      'AuthToken',
      (CurrentUser, AuthToken) => {
        class UserLinksController {
          user() {
            return CurrentUser.get();
          }

          isLoggedIn() {
            return CurrentUser.isLoggedIn();
          }

          logout() {
            CurrentUser.clear();
            AuthToken.clear();
          }
        }

        return {
          restrict: 'EA',
          template: `
            <div class="user-links">
              <span ng-show="vm.isLoggedIn()">
                <a ui-sref="profile">Signed in as {{ vm.user().name }}</a>
                |
                <a ui-sref="sign-up" ng-click="vm.logout()">Log Out</a>
              </span>
              <span ng-show="!vm.isLoggedIn()">
                <a ui-sref="sign-up">Sign Up</a>
              </span>
            </div>
          `,
          controller: UserLinksController,
          controllerAs: 'vm',
          bindToController: true,
          scope: {},
        };
      }
    ]);
}
