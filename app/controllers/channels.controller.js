angular.module('UserApp')
  .controller('ChannelsCtrl', function($state, Auth, Users, profile, channels){
    var channelsCtrl = this;

    // Users.setOnline(profile.$id);
    console.log("Users: ", Users.all);
    console.log("Profile: ", profile);
    console.log("Channels: ", channels);
    console.log("Auth: ", Auth);
    channelsCtrl.profile = profile;
    channelsCtrl.channels = channels;

    channelsCtrl.getDisplayName = Users.getDisplayName;
    channelsCtrl.getGravatar = Users.getGravatar;
    channelsCtrl.getBusinessName = Users.getBusinessName;
    channelsCtrl.sales = Users.getSalesStatus;
    channelsCtrl.users = Users.all;

    Users.setOnline(channelsCtrl.profile.$id);

    channelsCtrl.logout = function(){ // logout function in chat
      channelsCtrl.profile.online = null;
      channelsCtrl.profile.$save().then(function(){
        Auth.$signOut().then(function(){
          $state.go('home');
        });
      });
    };

    channelsCtrl.newChannel = {
      name: ''
    };

    channelsCtrl.createChannel = function(){
      channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function(ref){
        $state.go('channels.messages', ref.key())
      });
    };
  });
