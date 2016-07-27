define(['angular'], function(angular) {

    angular.module('first',['ui.router']).config( ['$stateProvider', '$urlRouterProvider'], function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/index');
        $stateProvider.state('first', {
            url: '/first',
            template: '<div>Hello!! {{greeting}}</div>',
            resolve: { title: 'First' },
            controller: function() {
                $scope.greeting = 'This is my first router';
            }
        });
    });
});
