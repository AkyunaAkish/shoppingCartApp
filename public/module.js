var app = angular.module('shoppingCartApp', ['ngAnimate', 'ngRoute','ngResource'])
app.factory('JsonService', function($resource) {
  return $resource('cats.json');
});
