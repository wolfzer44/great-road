(function(){
  'use strict';

  angular
    .module('controllers')
    .controller('servicesCtrl', servicesCtrl);

    servicesCtrl.$inject = ['$scope', '$log', '$http']

    function servicesCtrl($scope, $log, $http) {
      $log.debug('services controller');

      $http.get('../../jsons/services.json')
        .then(function(data){
          console.log(data.data)
          $scope.services = data.data;
        })
        .catch(function(err){
          console.log(err)
        })

        $('.owl-services').owlCarousel({
            stagePadding: 50,
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        })

    };

}())
