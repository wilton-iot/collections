define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
"use strict";

var Shim = require("collections/shim");
var FastSet = require("collections/_fast-set");
var PropertyChanges = require("collections/listen/property-changes");

module.exports = FastSet;

Object.addEach(FastSet.prototype, PropertyChanges.prototype);

return module.exports;});
