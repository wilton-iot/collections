define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
"use strict";

var Map = require("collections/_map");
var PropertyChanges = require("collections/listen/property-changes");
var MapChanges = require("collections/listen/map-changes");

module.exports = Map;

if((global.Map === void 0) || (typeof global.Set.prototype.values !== "function")) {
    Object.addEach(Map.prototype, PropertyChanges.prototype);
    Object.addEach(Map.prototype, MapChanges.prototype);
}
else {
    Object.defineEach(Map.prototype, PropertyChanges.prototype, false, /*configurable*/true, /*enumerable*/ false, /*writable*/true);
    Object.defineEach(Map.prototype, MapChanges.prototype, false, /*configurable*/true, /*enumerable*/ false, /*writable*/true);
}

return module.exports;});
