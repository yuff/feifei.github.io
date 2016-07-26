//requirejs(['js/main']);

define(['./main'], function () {
    return {
        init: function() {
            angular.bootstrap(document, ['mainApp']);
        }
    };
});