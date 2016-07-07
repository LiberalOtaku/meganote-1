{
  angular
    .module('meganote', [
      // Angular modules
      'ui.router',

      // Third-party modules
      'ngFlash',
      'textAngular',

      // Custom modules
      'meganote.notes',
      'meganote.notesForm',
      'meganote.layout',
      'meganote.signUp',
      'meganote.users'
    ])
    .config(configFunction);

  configFunction.$inject = ['$urlRouterProvider'];
  function configFunction($urlRouterProvider) {
    $urlRouterProvider.otherwise('/notes/');
  }
}
