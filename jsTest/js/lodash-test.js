var _= require('lodash');

var lodashTest = (function() {
    function LodashTest() {}
    LodashTest.prototype.testChunk = function() {
        /**
         * @type {Array}
         * length of new chunk2;chunk0:a,b,c;chunk1:d
         */
        var newChunk = _.chunk(['a', 'b', 'c', 'd'], 3);
        console.log('length of new chunk' + newChunk.length);
        console.log('chunk0:' + newChunk[0]);
        console.log('chunk1:' + newChunk[1]);
        return newChunk;
    }
    LodashTest.prototype.testCompact = function(array) {
        var args = array ? array: [0, 1, false, 2, '', 3];
        return _.compact(args);
    }
    LodashTest.prototype.testConcat = function() {
        var array = [1];
        var other = _.concat(array, 2, [3, 4, 5], [[6,7],[8,9]]);
        console.log(other);

        console.log(array);
    }
    return new LodashTest();
})();
//LodashTest.testChunk();
exports.lodashTest = lodashTest;
/*
* what's the difference between (function(){})(this) and (function(){}.call(this))??
*/
