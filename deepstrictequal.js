var assert = require('assert');
var x = { a = { n: 0 } };
var y = { a = { n: 0 } };
var z = { a = { n: '0' } };
assert.deepEqual(x, y); //OK
assert.deepEqual(x, z); /*AssertionError: { a: { n: 0 } } deepStrictEqual {a: { n: '0' } }*/
assert.notstrictDeepEqual(x, z, "My message goes here");
assert.notstrictDeepEqual(x, y, "My message goes here");