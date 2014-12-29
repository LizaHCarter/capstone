(function(){
    'use strict';
    angular.module('capstone')
      .controller('ProfileCtrl', ['$scope', '$state', 'User', function($scope, $state, User){
        $scope.title = 'profile';
        $scope.expense = {};        $scope.create = function(expenses){
            console.log('client/view:', expenses);
            User.create(expenses).then(function(response){
                $state.go('home');
            });
        };
    }]);
})();
