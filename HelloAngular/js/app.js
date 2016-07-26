/** config require js refer to
 * http://www.ruanyifeng.com/blog/2012/11/require_js.html
 * http://requirejs.org/docs/api.html
 */
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: './js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        angular: '../bower_components/angular/angular',
        jquery: '../bower_components/jquery/dist/jquery'
    },
    wrapShim: true,
    shim: {
    angular: {
        deps: ['jquery'],
        exports: 'angular'
    }
}
});

// Start the main app logic.
requirejs(['angular', 'main'], function(angular, main) {
    angular.element(document).ready(function() {
        main.init();
        angular.bootstrap(document, ['helloAngular']);
    });
});