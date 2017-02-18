angular.module('UserApp')
  .controller('ProfileCtrl', function($state, md5, auth, profile){
    var profileCtrl = this;

    profileCtrl.profile = profile;

    profileCtrl.updateProfile = function(){
      profileCtrl.profile.emailHash = md5.createHash(auth.email);
      profileCtrl.profile.sales = false;
      profileCtrl.profile.$save().then(function(){ // displayNamermdir channels
        $state.go('channels'); // goes back to chat after updating name
      });
    }
  });
