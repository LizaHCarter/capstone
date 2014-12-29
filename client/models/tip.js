(function(){
  'use strict';

  angular.module('capstone')
  .factory('Tip', ['$http', function($http){

    function create(tip){
      return $http.post('/tips', tip);
    }
    return {create:create};
  }]);
})();
