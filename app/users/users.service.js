{
  angular
    .module('meganote.users')
    .service('UsersService', [
      '$http',
      'DATABASE_URL',
      ($http, DATABASE_URL) => {
        class UsersService {
          create(user) {
            return $http
              .post(`${DATABASE_URL}users`, {
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
