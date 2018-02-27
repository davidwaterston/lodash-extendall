# Lodash extendall

[![Build Status](https://travis-ci.org/davidwaterston/lodash-extendall.svg)](https://travis-ci.org/davidwaterston/lodash-extendall)
[![Known Vulnerabilities](https://snyk.io/test/github/davidwaterston/lodash-extendall/badge.svg?targetFile=package.json)](https://snyk.io/test/github/davidwaterston/lodash-extendall?targetFile=package.json)
[![NPM version](http://img.shields.io/npm/v/lodash-extendall.svg)](https://www.npmjs.com/package/lodash-extendall/)


Extend [Lodash](https://lodash.com/) to allow all objects in an array of objects to be extended i.e. to have new properties added or existing properties updated based on input object properties.
Returns a new array with the original array left unchanged.  
Does minimal checking of inputs; assumes the array is an array of objects.


### _.extendAll(arr, obj)

**Arguments**  
arr (array): The array of objects to be extended. Required.  
obj (object): The object to be used to extend each object in the array. Where a property in this object doesn't exist in the array object it will be added. Where it does exist it will be replaced.

**Returns**  
(array): An new array of extended objects.  


### Examples  
```
var _ = require('lodash')
require('lodash-extendall')

_.extendAll([{a:1, b:2},{a:3, b:4}], {x:'new1', y:'new2'}) // [{a:1, b:2, x:'new1', y:'new2'},{a:3, b:4, x:'new1', y:'new2'}]
_.extendAll([{a:1, b:2},{a:3, b:4}], {a:999, x:'new1'}) // [{a:999, b:2, x:'new1'},{a:999, b:4, x:'new1'}]
_.extendAll([{a:1, b:2},{a:3, b:4}], {}}) // [{a:1, b:2},{a:3, b:4}]
_.extendAll([{a:1, b:2},{a:3, b:4}], ['abc']) // [{a:1, b:2},{a:3, b:4}]
_.extendAll([]], {a:false, x:false}) // []
_.extendAll([{a:1, b:2},{a:3}], {b:false}) // [{a:1, b:false},{a:3, b:false}]
```


### Version History

| Version | Release Date | Details |   
| :-- | :-- | :-- |    
| 1.0.2 | 27th February, 2018 | Update the Version History. No functionality changes. |
| 1.0.1 | 27th February, 2018 | Fix layout issues with Examples in the README. No functionality changes. |
| 1.0.0 | 26th February, 2018 | Initial release. |
