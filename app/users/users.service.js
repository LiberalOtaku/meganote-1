{
  class UsersService {
    create(user) {
      console.log('User created!');
      console.log(user);
    }
  }
  
  angular
    .module('meganote.users')
    .service('UsersService', UsersService);
}
