define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;

require("collections/observable-object");

var object = {};

Object.addOwnPropertyChangeListener(object, 'a', function (value, key, object) {
    console.log('changed', value);
});

object.a = 10;
object.a = 20;


return module.exports;});
