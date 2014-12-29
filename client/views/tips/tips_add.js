(function(){
    'use strict';
    angular.module('capstone')
      .controller('TipsAddCtrl', ['$scope', '$state', 'Tip', function($scope, $state, Tip){

        $scope.create = function(){
            console.log('button clicked');
        };
        /*$scope.create = function(tip){
            debugger;
            Tip.create(tip).then(function(response){
                $state.go('home');
            }, function(){
                $scope.tip = {};
            });
        };*/
    }]);
})();
