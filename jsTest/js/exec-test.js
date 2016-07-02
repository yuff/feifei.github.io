var LodashTest = require('./lodash-test');

LodashTest.lodashTest.testChunk();
var newArray = LodashTest.lodashTest.testCompact();
console.log(newArray);

LodashTest.lodashTest.testConcat();
LodashTest.lodashTest.testDifference([1,3,4,2],[4,5,6,3]);
LodashTest.lodashTest.testDifferenceBy();
LodashTest.lodashTest.testDifferenceWith();