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
      function show(){
        return $http.get('/profile');
      }
      function update(profile){
        console.log(profile);
        return $http.post('/profile/update', profile);
      }
      function create(profile){
        return $http.post('/profile', profile);
      }
      return {register:register, login:login, logout:logout, show:show, update:update, create:create};
    }]);
})();
