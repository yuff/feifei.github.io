
angular.module('helloAngular', []).controller(
    'HelloAngularController', function($scope) {
        $scope.menus = ['First', 'Second', 'Third'];

        $scope.clickMenu = function(menu) {
            console.log('click ' + menu);
            window.alert(menu);
        }
    }
);