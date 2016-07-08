{
  angular
    .module('meganote.users')
    .service('UsersService', [
      '$http',
      'DATABASE_URL',
      'AuthToken',
      'CurrentUser',
      ($http, DATABASE_URL, AuthToken, CurrentUser) => {
        const usersURL = `${DATABASE_URL}users/`;

        class UsersService {
          // Sign Up
          create(user) {
            return $http
              .post(usersURL, {
                user,
              })
              .then(
                res => {
                  AuthToken.set(res.data.authToken);
                  CurrentUser.set(res.data.user);
                }
              );
          }
        }

        return new UsersService();
      }
    ]);
}
