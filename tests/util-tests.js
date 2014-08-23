var util = require('../js/util');
var assert = require('assert');

describe('Hello World function', function() {
    it('should always fail', function() {
        assert.equal(false, true);
    });

    it('should just say hello', function() {
        var answer = util.helloWorld();
        assert.equal('Hello World\n', answer);
    });
});