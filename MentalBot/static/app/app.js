var app = angular.module("app", ["ngRoute","ngResource"]);

app.config(function($routeProvider){
  $routeProvider
  .when("/",{
      controller: "mentalBotCtrl",
      templateUrl: "app/partials/mentalBot.html"
  })
  .when('/howTo', {redirectTo: "app/partials/howTo.html"})
  .otherwise({redirectTo: "/"});

})
