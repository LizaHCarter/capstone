(function(){
  'use strict';

  angular.module('capstone')
  .factory('Tip', ['$http', function($http){

    function create(tip){
      return $http.post('/tips', tip);
    }
    function show(tipId){
        return $http.get('/tips/'+tipId);
    }
    return {create:create, show:show};
  }]);
})();
