angular.module('starter.controllers', ['ionic'])
.controller('DashCtrl', function($scope) {})
.controller('ChatsCtrl',function($scope,$stateParams,$location,$http,Chats){
    var request=[];
    request['address']="http://localhost:13373";
    request['command']='sendConfig';

    Chats.getData({address:"http://localhost:13373",command:"sendConfig"},function(data){
        console.log(data);
        $scope.chats=data;
    });
  $scope.$on('$ionicView.enter', function(){
    var temp=$location.path();
    $scope.selected=temp[temp.length-1];
}); 
       $scope.remove = function(chat) {
    Chats.remove(chat);
  }
   $scope.select= function(index) {
        $scope.location=$location.path();    };
  })
.controller('ChatDetailCtrl', function($scope, $stateParams,$location, Chats) {
   
  $scope.chat = Chats.get($stateParams.chatId);
  $stateParams.chatId;
  $scope.toggle=false;
  $scope.listCanSwipe = true 
  $scope.change=function(){
    console.log($scope.toggle);
    if ($scope.toggle) {$scope.toggle=false;}
    else {$scope.toggle=true};
  }
 
})
.directive('closeOption', function($ionicGesture, $ionicListDelegate) {
  return {
    restrict :  'A',

    link : function(scope, elem, attrs) {
     $ionicGesture.on('touch', function(e){
       $ionicListDelegate.closeOptionButtons();
     }, elem);
     
    }
  }
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

