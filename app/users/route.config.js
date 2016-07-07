{
  angular
    .module('meganote.users')
    .config(usersConfig);

  usersConfig.$inject = ['$stateProvider'];
  function usersConfig($stateProvider) {
    $stateProvider
      .state('sign-up', {
        url: '/sign-up',
        template: '<h1>Sign Up</h1>'
        // template: '<div my-sign-up></div>'
      });
  }
}
