define(function() {
    'use strict';
   var mainController = (function() {
       function MainController($scope) {
           this.$scope = $scope;
           $scope.mainController = this;
           this.menus = ['First', 'Second', 'Third'];
       }
       MainController.prototype.clickMenu = function(menu) {
           //TODO: add the real action here
           console.log('click ' + menu);
           window.alert(menu);
       }
       MainController.$inject = ['$scope'];
       return MainController;
   })();
    return mainController;
});