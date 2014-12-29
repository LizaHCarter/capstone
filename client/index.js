(function(){
  'use strict';

  angular.module('capstone', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home',       {url:'/',         templateUrl:'/views/home/home.html'})
        .state('register',   {url:'/register', templateUrl:'/views/users/users.html',      controller:'UsersCtrl'})
        .state('login',      {url:'/login',    templateUrl:'/views/users/users.html',      controller:'UsersCtrl'})
        .state('profile',    {url:'/profile',  templateUrl:'/views/profile/profile.html',  controller:'ProfileCtrl'})
        .state('tips',       {url:'/tips',     templateUrl:'/views/tips/tips.html',        abstract:true})
        .state('tips.add',   {url:'',          templateUrl:'/views/tips/tips_add.html',    controller:'TipsAddCtrl'})
        .state('tips.detail',{url:'/{tipId}',  templateUrl:'/views/tips/tips_detail.html', controller:'TipsDetailCtrl'});
      }])
    .run(['$rootScope', '$http', function($rootScope, $http){
      $http.get('/status').then(function(response){
        $rootScope.rootuser = response.data;
      }, function(){
        $rootScope.rootuser = null;
      });
    }]);
})();
