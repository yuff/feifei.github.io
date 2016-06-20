define(function() {
    console.log('require module: a');

    function A() {

    };
    A.prototype.hello = function() {
        console.log("hello a");
    };
    A.prototype.loadC = function() {
       require(['c'], function(c){
        	c.hello();
       });
    };
    var a = new A();
    return a;
});