angular.module('app.controllers', [])
  
.controller('categoriesCtrl', function($scope) {

})

.controller('productsCtrl', function($scope) {
    $scope.products = [
        {
            name: 'Not Found 1',
            image: 'https://az853139.vo.msecnd.net/static/images/not-found.png',
        },
        {
            name: 'Not Found 2',
            image: 'https://pbs.twimg.com/profile_images/600060188872155136/st4Sp6Aw.jpg'
        },
        {
            name: 'Not Found 3',
            image: 'https://www.makeupgeek.com/content/wp-content/themes/makeupgeek/images/placeholder-square.svg'
        },
        {
            name: 'Not Found 4',
            image: 'https://c1.staticflickr.com/1/186/382004453_f4b2772254.jpg'
        },
    ];
})
   
.controller('accountCtrl', function($scope) {

})
   
.controller('setupCtrl', function($scope) {

})
   
.controller('languageCtrl', function($scope) {

})
      
.controller('loginCtrl', function($scope, DBFactory) {
    // Initialize Firebase
    var firebase = DBFactory.init();
})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('favoritesCtrl', function($scope) {

})
 