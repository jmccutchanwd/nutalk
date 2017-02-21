angular.module('UserApp')
  .factory('Users', function($firebaseArray, $firebaseObject){

    var usersRef = firebase.database().ref('users');
    var connectedRef = firebase.database().ref('.info/connected');
    var users = $firebaseArray(usersRef);

    var Users = {
      getProfile: function(uid){
        return $firebaseObject(usersRef.child(uid));
      },

      getDisplayName: function(uid){
        return users.$getRecord(uid).displayName;
      },

      getBusinessName: function(uid){
        return users.$getRecord(uid).businessName;
      },

      getSalesStatus: function(uid){
        return users.$getRecord(uid).sales;
      },

      setOnline: function(uid){
        var connected = $firebaseObject(connectedRef);
        var online = $firebaseArray(usersRef.child(uid+'/online'));

        connected.$watch(function(){
          if(connected.$value === true){
            online.$add(true).then(function(connectedRef){
              connectedRef.onDisconnect().remove();
            });
          }
        });
      },

      all: users
    };
    return Users;
  });
