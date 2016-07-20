angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  
  .state('app', {
      url: '/menu',
      templateUrl: 'templates/menu.html',
      abstract: true
  })

  .state('app.categories', {
    url: '/categories',
    views: {
        'side-menu21': {
            templateUrl: 'templates/categories.html',
            controller: 'categoriesCtrl',
        }
    }
  })

  .state('app.products', {
    url: '/products',
    views: {
        'side-menu21': {
            templateUrl: 'templates/products.html',
            controller: 'productsCtrl',
        }
    }
  })

  .state('app.account', {
    url: '/account',
    views: {
        'side-menu21': {
            templateUrl: 'templates/account.html',
            controller: 'accountCtrl'
        }
    }
  })

  .state('app.setup', {
    url: '/setup',
    views: {
        'side-menu21': {
            templateUrl: 'templates/setup.html',
            controller: 'setupCtrl'
        }
    }
  })

  .state('app.language', {
    url: '/lang',
    views: {
        'side-menu21': {
            templateUrl: 'templates/language.html',
            controller: 'languageCtrl'
        }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('app.favorites', {
    url: '/favorite',
    views: {
        'side-menu21': {
            templateUrl: 'templates/favorites.html',
            controller: 'favoritesCtrl'
        }
    }
  })

$urlRouterProvider.otherwise('/login')

  

});