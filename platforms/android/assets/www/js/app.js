// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.Home', {
    url: '/Home',
    views: {
      'menuContent': {
        templateUrl: 'templates/Home.html'
      }
    }
  })
  .state('app.Login', {
    url: '/Login',
    views: {
      'menuContent': {
        templateUrl: 'templates/Login.html',
        controller: 'LoginCtrl'
      }
    }
  })
  .state('app.About', {
    url: '/About',
    views: {
      'menuContent': {
        templateUrl: 'templates/About.html'
      }
    }
  })
  .state('app.Contact', {
    url: '/Contact',
    views: {
      'menuContent': {
        templateUrl: 'templates/Contact.html'
      }
    }
  })

  //---------------------------------MAİN--------------------------------

  .state('Main', {
    url: '/Main',
    abstract: true,
    templateUrl: 'templates/Main.html',
    controller: 'MainCtrl'
  })
  .state('Main.System', {
    url: '/System',
    views: {
      'menuContent2': {
        templateUrl: 'templates/System.html'
      }
    }
  })
  .state('Main.Document', {
    url: '/Document',
    views: {
      'menuContent2': {
        templateUrl: 'templates/Document.html'
      }
    }
  })
  .state('Main.Screen', {
    url: '/Screen',
    views: {
      'menuContent2': {
        templateUrl: 'templates/Screen.html'
      }
    }
  })
  .state('Main.Cmd', {
    url: '/Cmd',
    views: {
      'menuContent2': {
        templateUrl: 'templates/Cmd.html'
      }
    }
  })
  .state('Main.LogOff', {
    url: '/LogOff',
    views: {
      'menuContent2': {
        templateUrl: 'templates/LogOff.html'
      }
    }
  });
   /* .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });*/
  $urlRouterProvider.otherwise('/app/Home');
})

.run(function ($rootScope, $state, AuthService) {
  $rootScope.$on('$stateChangeStart', function (event,next, nextParams, fromState) {
    
    if ('data' in next && 'authorizedRoles' in next.data) {
      var authorizedRoles = next.data.authorizedRoles;
      if (!AuthService.isAuthorized(authorizedRoles)) {
        event.preventDefault();
        $state.go($state.current, {}, {reload: true});
        $rootScope.$broadcast('Redzone');
      }
    }

    if (!AuthService.isAuthenticated()) {
      if (next.name === 'Main.System') {
        event.preventDefault();
        $state.go('app.Login');
      }
    }
  });
})

