define(function() {
    'use strict';
   var mainController = (function() {
       function MainController($scope) {
           $scope.mainController = this;
           this.$scope = $scope;
           this.menus = ['Math', 'English', 'Logic'];
       }
       MainController.prototype.clickMenu = function(menu) {
           //TODO: add the real action here
           console.log('click ' + menu);
           window.alert(menu);
       }
       MainController.prototype.getSref = function(menu) {
           return 'home.' + menu.toLowerCase();
       }
       MainController.$inject = ['$scope'];
       return MainController;
   })();
    return mainController;
});
