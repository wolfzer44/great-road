(function(){
  'use strict';

  angular
    .module('controllers', [])
    .controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$scope', '$log', '$http']

    function homeCtrl($scope, $log, $http) {
      $log.debug('home controller');

      slide()

    

      $http.get('../../jsons/services.json')
        .then(function(data){
          console.log(data.data)
          $scope.services = data.data;
        })
        .catch(function(err){
          console.log(err)
        })


      function slide() {
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:0,
            autoplay:true,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
          })
      }
    };

}())
