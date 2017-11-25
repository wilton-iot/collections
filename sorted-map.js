define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
"use strict";

var Shim = require("collections/shim");
var SortedSet = require("collections/sorted-set");
var GenericCollection = require("collections/generic-collection");
var GenericMap = require("collections/generic-map");
var PropertyChanges = require("collections/listen/property-changes");
var MapChanges = require("collections/listen/map-changes");

module.exports = SortedMap;

function SortedMap(values, equals, compare, getDefault) {
    if (!(this instanceof SortedMap)) {
        return new SortedMap(values, equals, compare, getDefault);
    }
    equals = equals || Object.equals;
    compare = compare || Object.compare;
    getDefault = getDefault || Function.noop;
    this.contentEquals = equals;
    this.contentCompare = compare;
    this.getDefault = getDefault;
    this.store = new SortedSet(
        null,
        function keysEqual(a, b) {
            return equals(a.key, b.key);
        },
        function compareKeys(a, b) {
            return compare(a.key, b.key);
        }
    );
    this.length = 0;
    this.addEach(values);
}

// hack so require("sorted-map").SortedMap will work in MontageJS
SortedMap.SortedMap = SortedMap;

SortedMap.from = GenericCollection.from;

Object.addEach(SortedMap.prototype, GenericCollection.prototype);
Object.addEach(SortedMap.prototype, GenericMap.prototype);
Object.addEach(SortedMap.prototype, PropertyChanges.prototype);
Object.addEach(SortedMap.prototype, MapChanges.prototype);
Object.defineProperty(SortedMap.prototype,"size",GenericCollection._sizePropertyDescriptor);

SortedMap.prototype.constructClone = function (values) {
    return new this.constructor(
        values,
        this.contentEquals,
        this.contentCompare,
        this.getDefault
    );
};
SortedMap.prototype.iterate = function () {
    return this.store.iterate();
};

SortedMap.prototype.log = function (charmap, logNode, callback, thisp) {
    logNode = logNode || this.logNode
    this.store.log(charmap, function (node, log, logBefore) {
        logNode(node.value, log, logBefore);
    }, callback, thisp);
};

SortedMap.prototype.logNode = function (node, log) {
    log(" key: " + node.key);
    log(" value: " + node.value);
};

return module.exports;});
