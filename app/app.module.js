{
  angular
    .module('meganote', [
      // Angular modules
      'ui.router',

      // Third-party modules
      'ngFlash',
      'textAngular',
      'angularSpinner',

      // Custom modules
      'meganote.notes',
      'meganote.notesForm',
      'meganote.layout',
      'meganote.signUp',
      'meganote.signIn',
      'meganote.users'
    ])
    .config(configFunction);

  configFunction.$inject = ['$urlRouterProvider'];
  function configFunction($urlRouterProvider) {
    $urlRouterProvider.otherwise('/notes/');
  }
}
