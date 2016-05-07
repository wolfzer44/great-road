(function(){
  'use strict';

  angular
    .module('usa')
    .directive('services', services);

    function services() {

      var directive = {
        restrict: "EA",
        replace: true,
        templateUrl: 'assets/js/services-home/services.html',
        controller: 'servicesCtrl'
      }

      return directive
    }
}())
