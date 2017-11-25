define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
"use strict";

var Dict = require("collections/_dict");
var PropertyChanges = require("collections/listen/property-changes");
var MapChanges = require("collections/listen/map-changes");

// Burgled from https://github.com/domenic/dict

module.exports = Dict;
Object.addEach(Dict.prototype, PropertyChanges.prototype);
Object.addEach(Dict.prototype, MapChanges.prototype);

return module.exports;});
