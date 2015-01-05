/*jshint camelcase:false*/
(function(){
  'use strict';

  angular.module('capstone')
  .controller('ProfileViewCtrl', ['$scope', '$state', 'User', function($scope, $state, User){
    $scope.moment = moment;
    $scope.mode = $state.current.name;
    User.show($state.params.userId).then(function(response){
      $scope.profile = response.data;
    });
    $scope.edit = function(){
        $scope.toggle = true;
    };
    $scope.submit = function(profile){
        profile.rent = profile.rent.replace('$', '');
        profile.rent = profile.rent.replace(',', '');
        //profile.rent = profile.rent * 1;
        profile.groceries = profile.groceries.replace('$', '');
        profile.groceries = profile.groceries.replace(',', '');
        //profile.groceries = profile.groceries * 1;
        profile.utilities = profile.utilities.replace('$', '');
        profile.utilities = profile.utilities.replace(',', '');
        //profile.utilities = profile.utilities * 1;
        profile.savings = profile.savings.replace('$', '');
        profile.savings = profile.savings.replace(',', '');
        //profile.savings = profile.savings * 1;
        profile.other = profile.other.replace('$', '');
        profile.other = profile.other.replace(',', '');
        //profile.other = profile.other * 1;
        //profile.percent = profile.percent * 1;
        delete profile.total;
        delete profile.created_at;
        delete profile.updated_at;
        User.create(profile).then(function(response){
            console.log(response);
            $scope.toggle = false;
        });
    };
  }]);
})();
