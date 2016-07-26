(function() {
    requirejs.config( {
        paths: {
            angular: 'bower_components/angular/angular',
        },
        wrapShim: true,
        shim: {
            angular: {
                deps: ['jquery'],
                exports: 'angular'
            }
        }
    })
})();
