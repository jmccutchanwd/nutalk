/* John McCutchan ========================================= */
console.log("Config-on");
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
      templateUrl: 'partials/main.html',
      controller: 'MainCtrl as mainCtrl',
    })
    .state('start', {
      url: '/start',
      templateUrl: 'partials/start.html',
      controller: 'MainCtrl as mainCtrl',
    })
    .state('login', {
      url: '/login',
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl as loginCtrl',
    })
    .state('register', {
      url: '/register',
      templateUrl: 'partials/register.html',
      controller: 'LoginCtrl as loginCtrl',
    })
    .state('chat', {
      url: '/chat',
      templateUrl: 'partials/chat.html',
      controller: 'ChatCtrl as chatCtrl',
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'partials/profile.html',
      controller: 'CustomerCtrl as customerCtrl',
    })

    $urlRouterProvider.otherwise('/');
})
