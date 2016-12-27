var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html",
        controller :"homeController"
    })
    .when("/Services",{
        templateUrl : "Services.html",
        controller :"ServicesController"
    })
    .when("/login", {
        templateUrl : "login.html",
        controller :"loginController"
    })
    .when("/Innovative", {
        templateUrl : "Innovative.html",
        controller :"InnovativeController"
    })
});


    