var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        controller: 'HomeController',
        templateUrl: 'SPA/partials/home.html'
    })

});