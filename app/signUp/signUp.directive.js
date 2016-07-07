{
  angular
    .module('meganote.signUp')
    .directive('mySignUp', () => {
      return {
        restrict: 'EA',
        template: '<h1>Sign Up Directive</h1>',
        scope: {},
      };
    });
}
