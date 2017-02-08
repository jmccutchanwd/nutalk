/* John McCutchan ========================================= */
console.log("Post Services-on");
app.service('PostServices', function($http, $q){
  return {
    chatSend: function(obj){
      return $http
      .post('https://velocilinx-chat.firebaseio.com/chats/.json', JSON.stringify(obj))
      .then(console.log("Sent to Firebase: ", obj))
    }
  }
})
