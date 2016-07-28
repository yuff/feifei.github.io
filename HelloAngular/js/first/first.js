define(['angular'], function(angular) {

    angular.module('hello-angular.first',['ui.router']).config( ['$stateProvider', '$urlRouterProvider'], function($stateProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $stateProvider.state('first', {
            url: '^/first',
            template: '<div>Hello!! {{greeting}}</div>',
            resolve: { title: 'First' },
            controller: function() {
                $scope.greeting = 'This is my first router';
            }
        });
    });
});
