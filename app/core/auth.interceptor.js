{
  angular
    .module('meganote')
    .factory('AuthInterceptor', AuthInterceptor)
    .config(authConfig);


  AuthInterceptor.$inject = ['AuthToken', 'DATABASE_URL'];
  function AuthInterceptor(AuthToken, DATABASE_URL) {
    return {
      request(req) {
        const token = AuthToken.get();
        if (token && req.url.includes(DATABASE_URL)) {
          req.headers.Authorization = token;
        }
        return req;
      }
    };
  }

  authConfig.$inject = ['$httpProvider'];
  function authConfig($httpProvider) {
    return $httpProvider.interceptors.push('AuthInterceptor');
  }
}
