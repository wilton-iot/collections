define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;

require("collections/shim-object");

Object.forEach({a: 10, b: 20}, function (value, key) {
    console.log(key + ": " + value);
});


return module.exports;});
