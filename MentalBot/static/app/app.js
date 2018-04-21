var app = angular.module("app", ["ngRoute","ngResource"]);

app.config(function($routeProvider){
  $routeProvider
  .when("/",{
      templateUrl: "app/partials/home.html"
  })
  .when('/mentalBot', {
    controller: "mentalBotCtrl",
    templateUrl: "app/partials/mentalBot.html"
  })
  .when('/home', {
    templateUrl: "app/partials/home.html"
  })
  .when('/help', {
    templateUrl: "app/partials/help.html"
  })
  .otherwise({redirectTo: "/"});

})
