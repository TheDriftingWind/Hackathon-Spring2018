app.controller("mentalBotCtrl", ["mentalBotSvc","$scope", "$rootScope", function(mentalBotSvc, $scope, $rootScope){
$scope.test = test;
$scope.emo = ''
$scope.countDown = 2;

//$scope.e = $rootScope.emotion
console.log($rootScope.emotion)

var timer = setInterval(function(){
  if($scope.counterDown > 0){
    $scope.countDown--;
  } else {
    $scope.emo = $rootScope.emotion
    //test()
    $scope.countDown = 2;
  }
  $scope.$apply(function() {
      $scope.show = $scope.emo
  });
},1000);

function test(){
  console.log($rootScope.emotion)
}

}]);
