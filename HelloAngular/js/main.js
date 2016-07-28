define(['angular', 'main-controller'], function(angular, mainController) {
    'use strict';
   return {
       init: function() {
           var app= angular.module('helloAngular',['ui.router']);
           //app.controller('mainController',mainController);
           app.config( ['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
               $urlRouterProvider.otherwise('/first');
               $stateProvider.state('first', {
                   url: '/first',
                   templateUrl: './js/first/first.html',
                   //resolve: { title: 'First' },
                   controller: function($scope) {
                       $scope.greeting = 'This is my first router';
                   }
               }).state('home', {
                   url: '/home',
                   templateUrl: './js/home/home.html',
                   controller: mainController
               }).state('home.logic', {
                   url: '/logic',
                   template: '<div>logic!! {{name}}</div>',
                   controller: function($scope) {
                       $scope.name = 'Thinkfun';
                   }
               }).state('home.math', {
                   url: '/math',
                   template: '<div>math!! {{name}}</div>',
                   controller: function($scope) {
                       $scope.name = '+-*/';
                   }
               }).state('home.english', {
                   url: '/english',
                   template: '<div>english!! {{name}}</div>',
                   controller: function($scope) {
                       $scope.name = 'maisy/dora/thomas';
                   }
               });
           }]);
       }
   }
});
