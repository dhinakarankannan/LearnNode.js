var assert = require('assert');
var x = { a = { n: 0 } };
var z = { a = { n: 1 } };
assert.deepEqual(x, z, "My message goes here");
assert.notDeepEqual(x, z, "My message goes here");
