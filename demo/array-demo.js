define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;

require("collections/shim-array");
var Iterator = require("collections/iterator");

var array = [1,2,3];
var iterator = new Iterator(array);
iterator.forEach(console.log);

var iterator = new Iterator(array.iterate(0, 2));
iterator.forEach(console.log);

console.log(Array.from([1,2,3]));


return module.exports;});
