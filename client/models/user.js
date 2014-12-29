(function(){
  'use strict';

  angular.module('capstone')
    .factory('User', ['$http', function($http){
      function register(user){
        return $http.post('/register', user);
      }
      function login(user){
        return $http.post('/login', user);
      }
      function logout(){
        return $http.delete('/logout');
      }
      function profile(expenses){
        console.log('client/model:', expenses);
        return $http.post('/profile', expenses);
      }
      return {register:register, login:login, logout:logout, profile:profile};
    }]);
})();
