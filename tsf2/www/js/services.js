angular.module('starter.services', [])
  .factory('Chats',function($http){
    return{
      getData: function(req,callback){
          var url=req.address+"?command="+req.command;
          $http.get(url).success(function(data) {
            console.log("Success")
        if(typeof callback=="function")
            callback(data);
        })      
      }
    };
  }); 