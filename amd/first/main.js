define(['a', 'b'], function(A, B) {
    console.log('require module: main');

    A.hello();
    B.hello();

    function Main() {

    };
    Main.prototype.hello = function() {
         console.log('hello main');
    };
    Main.prototype.loadC = function() {
       A.loadC();
    };
    var main = new Main();
    return main;
});