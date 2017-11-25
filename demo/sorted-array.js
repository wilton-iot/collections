define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var SortedArray = require("collections/sorted-array");

var array = SortedArray([]);
array.addEach([5, 2, 4, 3, 1]);
console.log(array.toArray());

var array = SortedArray([1, 1, 1, 1, 1]);
console.log(array.indexOf(1));
console.log(array.lastIndexOf(1));


return module.exports;});
