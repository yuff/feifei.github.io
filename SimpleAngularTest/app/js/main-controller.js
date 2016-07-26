define(function() {
    var mainController = (function() {
        function MainController($scope) {
            this.$scope = $scope;
            $scope.mainController = this;
            this.actions=['draw huge table', 'draw a small table', 'a blank canvas'];
        }
        MainController.prototype.clickItem = function(item) {
            console.log('click ' + item);
            window.alert(item);
        };
        MainController.$inject = ['$scope'];
        return MainController;
    })();
    return mainController;
});
