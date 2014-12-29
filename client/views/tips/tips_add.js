(function(){
    'use strict';
    angular.module('capstone')
      .controller('TipsAddCtrl', ['$scope', '$state', 'Tip', function($scope, $state, Tip){
        $scope.moment = moment;
        $scope.tip = {};
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        $scope.date = new Date();
        $scope.create = function(tip, date){
            tip.date = date;
            var t = tip.date;
            tip.day = days[t.getDay()];
            Tip.create(tip).then(function(response){
                $state.go('tips.detail');
            }, function(){
                $scope.tip = {};
            });
        };
    }]);
})();
