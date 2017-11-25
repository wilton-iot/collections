define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;

module.exports = permute;
function permute(values) {
    if (values.length === 0)
        return [];
    if (values.length === 1)
        return [values];
    var permutations = [];
    for (var index = 0; index < values.length; index++) {
        var tail = values.slice();
        var head = tail.splice(index, 1);
        permute(tail).forEach(function (permutation) {
            permutations.push(head.concat(permutation));
        });
    }
    return permutations;
}


return module.exports;});
