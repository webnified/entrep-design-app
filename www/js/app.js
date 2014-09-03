// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.services', {
      url: "/services",
      views: {
        'menuContent' :{
          templateUrl: "templates/services.html"
        }
      }
    })    

    .state('app.account', {
      url: "/account",
      views: {
        'menuContent' :{
          templateUrl: "templates/account.html"
        }
      }
    })

    .state('app.members', {
      url: "/members",
      views: {
        'menuContent' :{
          templateUrl: "templates/members.html"
        }
      }
    })
 
    .state('app.share', {
      url: "/share",
      views: {
        'menuContent' :{
          templateUrl: "templates/share.html"
        }
      }
    })    

    .state('app.contact', {
      url: "/contact",
      views: {
        'menuContent' :{
          templateUrl: "templates/contact.html"
        }
      }
    })

    .state('app.directory', {
      url: "/directory",
      views: {
        'menuContent' :{
          templateUrl: "templates/directory.html"
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/services');
});

