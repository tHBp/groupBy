(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([''], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.arrayGroup = factory();
    }
}(this, function() {
    return function groupBy(array, keys, transform) {
        var groups, transformation;
        return keys ? Object.keys((groups = array.reduce(function (accumulator, currentValue) {
            var key = getObjectProperty(currentValue, keys[0]);
            transform ? (transformation = transformation || [], transformation[key] = transform(currentValue)) : void 0;
            (accumulator[key] = accumulator[key] || []).push(currentValue);
            return accumulator;
        }, {}), keys = JSON.parse(JSON.stringify(keys)), keys.shift(), groups)).map(function (item, index, array) {
            return {
                key: transform ? transformation[item][keys.length ? (keys.length - 1) : (transformation[item].length - 1)] : item,
                children: keys[0] ? groupBy(groups[item], keys, transform) : groups[item]
            }
        }) : array;
    };
}));
function getObjectProperty(object, stringKey) {
    for (var i = 0, latestValue = object, partialKey = stringKey.split('.'); i < partialKey.length; i++) {
        latestValue = latestValue[partialKey[i]];
    }
    return latestValue;
}
