app.config(function($routeProvider, $locationProvider){

  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html'
  }).when('/cart', {
    templateUrl: 'partials/shoppingCart.html'
  })
  .otherwise({redirectTo:"/"});

  $locationProvider.html5Mode(true);
})

// .when('/items', {
//   readFile: 'items.json',
//   res.json('items.json'),
//   controller: 'HomeController'
// })
