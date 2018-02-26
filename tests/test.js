var should = require('should');
var _ = require('lodash');
require('../src/extendAll.js')

describe('_.extendAll', function () {

    it('Returns an array with each object containing two new properties', function (done) {
        var arr = [{a:1, b:2},{a:3, b:4}];
        var obj = {x:'new1', y:'new2'};
        _.extendAll(arr, obj).should.eql([{a:1, b:2, x:'new1', y:'new2'},{a:3, b:4, x:'new1', y:'new2'}]);
        done();
    });

    it('Returns an array with each object having one property updated and a new one added', function (done) {
        var arr = [{a:1, b:2},{a:3, b:4}];
        var obj = {a:999, x:'new1'};
        _.extendAll(arr, obj).should.eql([{a:999, b:2, x:'new1'},{a:999, b:4, x:'new1'}]);
        done();
    });

    it('Returns an unchanged array when the source object is empty', function (done) {
        var arr = [{a:1, b:2},{a:3, b:4}];
        var obj = {};
        _.extendAll(arr, obj).should.eql([{a:1, b:2},{a:3, b:4}]);
        done();
    });

    it('Returns an unchanged array when the source \'object\' is not an object', function (done) {
        var arr = [{a:1, b:2},{a:3, b:4}];
        var obj = ['abc'];
        _.extendAll(arr, obj).should.eql([{a:1, b:2},{a:3, b:4}]);
        done();
    });

    it('Returns an unchanged array when the array is empty (there are no objects to extend)', function (done) {
        var arr = [];
        var obj = {a:false, x:false};
        _.extendAll(arr, obj).should.eql([]);
        done();
    });

    it('Returns an array with object updated where it exists and added where it doesn\'t', function (done) {
        var arr = [{a:1, b:2},{a:3}];
        var obj = {b:false};
        _.extendAll(arr, obj).should.eql([{a:1, b:false},{a:3, b:false}]);
        done();
    });

});
