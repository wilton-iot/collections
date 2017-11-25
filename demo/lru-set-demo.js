define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;

var LruSet = require("collections/lru-set");

var set = new LruSet([1, 2, 3], 3);
console.log(set.toArray());

set.get(2);
console.log(set.toArray());

set.add(4);
console.log(set.toArray());

set.add(2);
console.log(set.toArray());


return module.exports;});
