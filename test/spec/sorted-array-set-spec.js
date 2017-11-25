define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;

var SortedArraySet = require("collections/sorted-array-set");
var describeDeque = require("collections/test/spec/deque");
var describeCollection = require("collections/test/spec/collection");
var describeSet = require("collections/test/spec/set");
var describeToJson = require("collections/test/spec/to-json");
var describe = require("tape-compat");
var it = describe.it;
var expect = describe.expect;

describe("SortedArraySet-spec", function () {

    describeDeque(SortedArraySet);
    describeCollection(SortedArraySet, [1, 2, 3, 4]);
    describeSet(SortedArraySet);
    describeToJson(SortedArraySet, [1, 2, 3, 4]);

    it("uniqueness", function () {
        var set = SortedArraySet([1, 2, 3, 1, 2, 3]);
        expect(set.slice()).toEqual([1, 2, 3]);
    });

});

return module.exports;});
