var _ = require('lodash');

function extendAll(arr, obj) {
    if (!_.isEmpty(arr) && obj instanceof Object && obj.constructor === Object && !_.isEmpty(obj)) {
        return _.map(arr, function(arrObj) {
            return _.extend({}, arrObj, obj);
        });
    } else {
        return arr;
    }
}

_.mixin({'extendAll': extendAll})
