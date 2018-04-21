var app = angular.module("app", ["ngRoute","ngResource"]);

app.config(function($routeProvider){
  $routeProvider
  .when("/",{
      controller: "mentalBotCtrl",
      templateUrl: "app/partials/mentalBot.html"
  })
  .when('/help', {redirectTo: "app/partials/help.html"})
  .otherwise({redirectTo: "/"});

})
