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
              .post(usersURL, { user })
              .then(
                res => {
                  AuthToken.set(res.data.authToken);
                  CurrentUser.set(res.data.user);
                }
              );
          }

          // Sign In
          login(user) {
            return $http
              .post(`${DATABASE_URL}sessions/`, { user })
              .then(
                res => {
                  AuthToken.set(res.data.authToken);
                  CurrentUser.set(res.data.user);
                }
              );
          }

          // Update Profile
          update(user) {
            return $http
              .put(`${usersURL}${user._id}`, { user })
              .then(res => CurrentUser.set(res.data.user));
          }
        }

        return new UsersService();
      }
    ]);
}
