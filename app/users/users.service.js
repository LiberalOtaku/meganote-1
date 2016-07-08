{
  angular
    .module('meganote.users')
    .service('UsersService', [
      '$http',
      'DATABASE_URL',
      ($http, DATABASE_URL) => {
        const usersURL = `${DATABASE_URL}users/`;
        class UsersService {
          create(user) {
            return $http
              .post(usersURL, {
                user,
              })
              .then(
                res => console.log(res.data)
              );
          }
        }

        return new UsersService();
      }
    ]);
}
