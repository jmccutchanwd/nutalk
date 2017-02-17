/* John McCutchan ========================================= */
console.log('Config-on');
angular.module('UserApp')
  .config(function ($stateProvider, $urlRouterProvider){
  var config = {
    apiKey: "AIzaSyAT3nZ5i2HSjhZbQbeulTd1J5wM2OAq5uU",
    authDomain: "velocilinx-chat.firebaseapp.com",
    databaseURL: "https://velocilinx-chat.firebaseio.com",
    storageBucket: "velocilinx-chat.appspot.com",
    messagingSenderId: "168034279158"
  };
  firebase.initializeApp(config);
  //
  $stateProvider
    .state('main', {
        url: '/',
        templateUrl: 'partials/main.html',
        resolve: {
          requireNoAuth: function($state, Login){
            return Login.$requireSignIn().then(function(auth){
              $state.go('chat');
            }, function(error){
              return;
            });
          }
        }
      })
    .state('start', {
      url: '/start',
      controller: 'MainCtrl as mainCtrl',
      templateUrl: 'partials/start.html',
      resolve: {
          requireNoAuth: function($state, Login){
            return Login.$requireSignIn().then(function(auth){
              $state.go('chat');
            }, function(error){
              return;
            })
          }
        }
    })
    .state('login', {
      url: '/login',
      controller: 'LoginCtrl as loginCtrl',
      templateUrl: 'partials/login.html',
      resolve: {
          requireNoAuth: function($state, Login){
            return Login.$requireSignIn().then(function(auth){
              $state.go('main');
            }, function(error){
              return;
            })
          }
        }
    })
    .state('register', {
      url: '/register',
      controller: 'LoginCtrl as loginCtrl',
      templateUrl: 'partials/register.html',
      resolve: {
          requireNoAuth: function($state, Login){
            return Login.$requireSignIn().then(function(auth){
              $state.go('main');
            }, function(error){
              return;
            })
          }
        }
    })
    .state('profile', {
      url: '/profile',
      controller: 'CustomerCtrl as customerCtrl',
      templateUrl: 'partials/profile.html',
      resolve: {
          auth: function($state, Chat, Login){
            return Login.$requireSignIn().catch(function(){ // if not authenticated, catch them
              $state.go('main');
            });
          },

          profile: function(Chat, Login){
            return Login.$requireSignIn().then(function(auth){
              return Chat.getProfile(auth.uid).$loaded();
            });
          }
        }
    })
    .state('chat', {
      url: '/chat',
      controller: 'ChatCtrl as chatCtrl',
      templateUrl: 'partials/chat.html',
      resolve:{
          channels: function(Chat){
            return Chat.$loaded();
          },
          profile: function($state, Login, Chat){
            return Login.$requireSignIn().then(function(auth){
              return Chat.getProfile(auth.uid).$loaded().then(function(profile){
                if(profile.displayName){ // if true return the name
                  return profile;
                }else{
                  $state.go('profile'); // if false goto profile
                }
              });
            }, function(error){
              $state.go('main');
            });
          }
        }
    })
    .state('messages.direct', {
        url: '/{uid}/messages/direct',
        controller: 'MessageCtrl as messageCtrl',
        templateUrl: 'partials/mesage.html',
        resolve: {
          messages: function($stateParams, Messages, profile){
            return Messages.forUsers($stateParams.uid, profile.$id).$loaded();
          },
          channelName: function($stateParams, Chat){
            return Chat.all.$loaded().then(function(){
              return '@'+Chat.getDisplayName($stateParams.uid);
            });
          }
        }
      })
    $urlRouterProvider.otherwise('/');
})
