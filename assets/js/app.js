(function() {
  'use strict';

  angular
    .module('usa', ['controllers','ui.router', 'uiGmapgoogle-maps'])
    .run(run)
    .config(router).config(
        ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
            GoogleMapApiProviders.configure({
                china: true
            });
        }]
    );

    run.$inject = ['$log', '$rootScope'];

    function run($log, $rootScope) {
      $log.debug('usa website');

      $rootScope.$on('$stateChangeSuccess',
      function(event, toState, toParams, fromState, fromParams, options){
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:0,
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
      })
    }


    router.$inject = ['$urlRouterProvider', '$stateProvider']
    function router($urlRouterProvider, $stateProvider) {

      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('home', {
          url: "/",
          templateUrl: "../views/home.view.html",
          controller: "homeCtrl"
        })
        .state('about-us', {
          url: "/about-us",
          templateUrl: "../views/about.view.html",
          controller: "servicesCtrl"
        })
        .state('services', {
          url: "/services",
          templateUrl: "../views/services.view.html",
          controller: "servicesCtrl"
        })

        .state('inspection-state', {
          url: "/inspection-state",
          templateUrl: "../views/inspection.view.html",
          controller: "servicesCtrl"
        })

        .state('question-and-answers', {
          url: "/question-and-answers",
          templateUrl: "../views/question.view.html",
          controller: "servicesCtrl"
        })

        .state('contact-us', {
          url: "/contact-us",
          templateUrl: "../views/contact.view.html",
          controller: "contactCtrl"
        })

    }

}())
