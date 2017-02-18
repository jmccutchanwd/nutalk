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
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html',
        resolve: {
          requireNoAuth: function($state, Auth){
            return Auth.$requireSignIn().then(function(auth){
              $state.go('channels');
            }, function(error){
              return;
            })
          }
        }
      })
      .state('login', {
        url: '/login',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'partials/login.html',
        resolve: {
          requireNoAuth: function($state, Auth){
            return Auth.$requireSignIn().then(function(auth){
              $state.go('home');
            }, function(error){
              return;
            })
          }
        }
      })
      .state('register', {
        url: '/register',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'partials/register.html',
        resolve: {
          requireNoAuth: function($state, Auth){
            return Auth.$requireSignIn().then(function(auth){
              $state.go('home');
            }, function(error){
              return;
            })
          }
        }
      })

      .state('profile', {
        url: '/profile',
        controller: 'ProfileCtrl as profileCtrl',
        templateUrl: 'partials/profile.html',
        resolve: {
          auth: function($state, Users, Auth){
            return Auth.$requireSignIn().catch(function(){ // if not authenticated, catch them
              $state.go('home');
            });
          },

          profile: function(Users, Auth){
            return Auth.$requireSignIn().then(function(auth){
              return Users.getProfile(auth.uid).$loaded();
            });
          }
        }
      })

      .state('channels', {
        url: '/channels',
        controller: 'ChannelsCtrl as channelsCtrl',
        templateUrl: 'partials/index.html',
        resolve:{
          channels: function(Channels){
            return Channels.$loaded();
          },
          profile: function($state, Auth, Users){
            return Auth.$requireSignIn().then(function(auth){
              return Users.getProfile(auth.uid).$loaded().then(function(profile){
                if(profile.displayName){ // if true return the name
                  return profile;
                }else{
                  $state.go('profile'); // if false goto profile
                }
              });
            }, function(error){
              $state.go('home');
            });
          }
        }
      })

      .state('channels.messages', {
        url: '/{channelId}/messages',
        templateUrl: 'partials/messages.html',
        controller: 'MessagesCtrl as messagesCtrl',
        resolve: {
          messages: function($stateParams, Messages) {
            return Messages.forChannel($stateParams.channelId).$loaded();
          },
          channelName: function($stateParams, channels) {
            return channels.$getRecord($stateParams.channelId).name;
          }
        }
      })

      .state('channels.direct', {
        url: '/{uid}/messages/direct',
        templateUrl: 'partials/mesages.html',
        controller: 'MessagesCtrl as messagesCtrl',
        resolve: {
          messages: function($stateParams, Messages, profile){
            return Messages.forUsers($stateParams.uid, profile.$id).$loaded();
          },
          channelName: function($stateParams, Users){
            return Users.all.$loaded().then(function(){
              return '@'+Users.getDisplayName($stateParams.uid);
            });
          }
        }
      })

      .state('channels.create', {
        url: '/create',
        templateUrl: 'partials/create.html',
        controller: 'ChannelsCtrl as channelsCtrl',
      })

    $urlRouterProvider.otherwise('/');
  })
