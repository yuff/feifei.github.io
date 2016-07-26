define(['../bower_components/angular/angular', 'main-controller'], function(angular, mainController) {
    'use strict';
   return {
       init: function() {
           angular.module('helloAngular',[]).controller('mainController',mainController);
       }
   }
});
