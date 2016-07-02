//https://lodash.com/docs
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

        console.log(array.concat(2, [3, 4, 5], [[6,7],[8,9]]));
    }
    LodashTest.prototype.testDifference = function(arr1, arr2) {
        var result = _.difference(arr1 || [1,2],arr2 || [2,3])
        console.log(result);
    }
    LodashTest.prototype.testDifferenceBy = function() {
       var differenceByY =  _.differenceBy([{ 'x': 2, 'y':1 }, { 'x': 1, 'y':2 }], [{ 'x': 1, 'y': 1 }], 'y');
       var differenceByX =  _.differenceBy([{ 'x': 2, 'y':1 }, { 'x': 1, 'y':2 }], [{ 'x': 1, 'y': 1 }], 'x');
        console.log('differenceByY: x=' + differenceByY[0].x + ',y=' + differenceByY[0].y);
        console.log('differenceByX: x=' + differenceByX[0].x + ',y=' + differenceByX[0].y);
    }
    LodashTest.prototype.testDifferenceWith = function() {
        var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

        var result = _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
        console.log(result);
    }
    return new LodashTest();
})();
//LodashTest.testChunk();
exports.lodashTest = lodashTest;
/*
* what's the difference between (function(){})(this) and (function(){}.call(this))??
*/
