(function(){
  'use strict';

  angular
    .module('controllers')
    .controller('contactCtrl', contactCtrl);

    contactCtrl.$inject = ['$scope', '$log', '$http']

    function contactCtrl($scope, $log, $http) {
      $log.debug('contact controller');

      $scope.map = {
        center: {
          latitude: 42.436558,
          longitude: -71.505500
        },
        zoom: 14,
        dragging: true
      };



    };

}())
