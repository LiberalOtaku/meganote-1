{
  angular
    .module('meganote.notes')
    .config(notesConfig);

  notesConfig.$inject = ['$stateProvider'];
  function notesConfig($stateProvider) {
    $stateProvider
      .state('notes', {
        url: '/notes',
        templateUrl: 'notes/notes.html',
        controller: 'NotesController',
        controllerAs: 'vm',
        resolve: {
          authenticated,
        },
        data: {
          title: 'Notes',
        }
      });
  }

  authenticated.$inject = ['CurrentUser'];
  function authenticated(CurrentUser) {
    return new Promise((resolve, reject) => {
      if (CurrentUser.isLoggedIn()) { resolve(); }
      else { reject(); }
    });
  }
}
