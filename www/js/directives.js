angular.module('app.directives', [])

.directive('imageItem', ['$parse', function($parse){
    function link (scope, element, attrs) {
        element.on('click', function () {
            console.log(attrs.index, attrs.item, attrs.ngModel);
            scope.result = attrs.item;
            scope.$apply();
            console.log(scope);
        });
    }
    return {
        restrict: 'C',
        scope: {
            result: '='
        },
        link: link
    };
}]);