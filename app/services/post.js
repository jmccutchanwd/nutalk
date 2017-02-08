/* John McCutchan ========================================= */
console.log("Post Services-on");
app.service('PostServices', function($http, $q, $rootScope){
  return {
    getChat: function(chat){
      return $http
      .get('https://velocilinx-chat.firebaseio.com/chats/.json')
      .then((response) => {
        return  response.data
      })
    },
    chatSend: function(obj){
      for(var i in $rootScope.list){
        if($rootScope.list.uid === $rootScope.uid){
          return $http
          .patch('https://velocilinx-chat.firebaseio.com/chats/.json', JSON.stringify(obj))
          .then(console.log("Patched to Firebase: ", obj))
        } else {
          return $http
          .post('https://velocilinx-chat.firebaseio.com/chats/.json', JSON.stringify(obj))
          .then(console.log("Post to Firebase: ", obj))
        }
      }
    }
  }
})
