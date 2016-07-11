{
  angular
    .module('meganote.users')
    .config(usersConfig);

  usersConfig.$inject = ['$stateProvider'];
  function usersConfig($stateProvider) {
    $stateProvider
      .state('sign-up', {
        url: '/sign-up',
        template: '<div my-sign-up></div>'
      })
      .state('sign-in', {
        url: '/sign-in',
        template: '<div my-sign-in></div>'
      })
      .state('profile', {
        url: '/profile',
        template: '<div my-user-profile></div>'
      });
  }
}
