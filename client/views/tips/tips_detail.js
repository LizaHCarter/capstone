(function(){
  'use strict';

  angular.module('capstone')
  .controller('TipsDetailCtrl', ['$scope', '$state','Tip', function($scope, $state, Tip){
    $scope.title = 'Tips Detail page';

    Tip.show($state.params.tipId).then(function(response){
        console.log(response.data);
        $scope.tip = response.data;
    });
  }]);
})();
