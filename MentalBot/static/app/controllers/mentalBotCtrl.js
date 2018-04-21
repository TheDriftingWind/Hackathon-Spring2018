app.controller("mentalBotCtrl", ["mentalBotSvc","$scope", "$rootScope", function(mentalBotSvc, $scope, $rootScope){
$scope.emo = '';
$scope.countDown = 10;
$scope.convo = 0;
$scope.setConvo = setConvo
$scope.showdebug = '1';
$scope.toggleDebug = toggleDebug;
$scope.allowShowChange = true;
$scope.finishConvo = finishConvo;

//$scope.e = $rootScope.emotion
console.log($rootScope.emotion)

var timer = setInterval(function(){
  if($scope.counterDown > 0){
    $scope.countDown--;
  } else {
    $scope.emo = $rootScope.emotion
    //test()
    $scope.countDown = 10;
  }
  if($scope.allowShowChange == true){
    $scope.$apply(function() {
        $scope.show = $scope.emo
        $scope.allowShowChange = false;
        switch($scope.emo){
          case 0: setConvo(30)
            break;
          case 1: setConvo(10)
            break;
          case 2: setConvo(20);
            break;
        }
    });
  }
},10000);

// function test(){
//   console.log($rootScope.emotion)
// }

function setConvo(val){
  $scope.convo = val;
}

function setShow(val) {
  $scope.show = val;
}

function toggleDebug(){
  if($scope.showdebug == 0){
        $scope.showdebug = 1;
  } else {
      $scope.showdebug = 0;
  }
}

function finishConvo(){
  $scope.allowShowChange = true;
}


}]);
