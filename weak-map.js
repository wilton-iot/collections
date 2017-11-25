define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;

module.exports = (typeof WeakMap !== 'undefined') ? WeakMap : require("weak-map");

return module.exports;});
