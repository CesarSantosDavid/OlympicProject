// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','starter.controllers','starter.directives',
                        'starter.mails', 'starter.agenda', 'starter.toogle',
                        'starter.bares', 'starter.clubs', 'starter.olimpias',
                        'starter.puntosTuristicos', 'starter.restaurant',
                        'starter.transport'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);


    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $provide) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.olimpias', {
    url: '/olimpias',
    views: {
      'menuContent': {
        templateUrl: 'templates/olimpias.html'
      }
    }
  })

  .state('app.puntosTuristicos', {
    url: '/puntosTuristicos',
    views: {
      'menuContent': {
        templateUrl: 'templates/puntosTuristicos.html'
      }
    }
  })

  .state('app.localisacao', {
    url: '/localisacao',
    views: {
      'menuContent': {
        templateUrl: 'templates/localisacao.html'
      }
    }
  })

    .state('app.restaurantes', {
      url: '/restaurantes',
      views: {
        'menuContent': {
          templateUrl: 'templates/restaurantes.html'
        }
      }
    })

  .state('app.bars', {
      url: '/bars',
      views: {
        'menuContent': {
          templateUrl: 'templates/bars.html'
        }
      }
    })

  .state('app.clubs', {
      url: '/clubs',
      views: {
        'menuContent': {
          templateUrl: 'templates/clubs.html'
        }
      }
    })

.state('app.mesagems', {
      url: '/mesagems',
      views: {
        'menuContent': {
          templateUrl: 'templates/mesagems.html'
        }
      }
    })

.state('app.agendamento', {
      url: '/agendamento',
      views: {
        'menuContent': {
          templateUrl: 'templates/agendamento.html'
        }
      }
    })

  .state('app.transport', {
      url: '/transport',
      views: {
        'menuContent': {
          templateUrl: 'templates/transport.html'
        }
      }
    })

  .state('app.parametros', {
      url: '/parametros',
      views: {
        'menuContent': {
          templateUrl: 'templates/parametros.html'
        }
      }
    })

  .state('app.ajuda', {
      url: '/ajuda',
      views: {
        'menuContent': {
          templateUrl: 'templates/ajuda.html'
        }
      }
    })
  
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
        }
      }
    })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');

  $provide.decorator('$state', function($delegate, $stateParams) {
        $delegate.forceReload = function() {
            return $delegate.go($delegate.current, $stateParams, {
                reload: true,
                inherit: false,
                notify: true
            });
        };
        return $delegate;
    });
});
