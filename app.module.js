{
  angular
    .module('meganote', [
      // Angular modules
      'ui.router',

      // Third-party modules
      'ngFlash',
      'textAngular',
      'angularSpinner',
      'ngResource',

      // Custom modules
      'meganote.notes',
      'meganote.notesForm',
      'meganote.layout',
      'meganote.signUp',
      'meganote.signIn',
      'meganote.users'
    ])
    .config(configFunction)
    .run(run);

  configFunction.$inject = ['$urlRouterProvider'];
  function configFunction($urlRouterProvider) {
    $urlRouterProvider.otherwise('/notes/');
  }

  run.$inject = ['$rootScope', '$state'];
  function run($rootScope, $state) {
    $rootScope.$on('$stateChangeSuccess', () => $rootScope.$state = $state);

    $rootScope.$on('$stateChangeError', () => $state.go('sign-in'));
  }
}
