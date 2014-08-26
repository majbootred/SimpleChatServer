var util = require('../js/util');
var assert = require('assert');

describe('Routing test', function() {
    it('should remove the first char from string', function() {
        assert.equal("emma", util.getPathnamefromURL("/emma"));
    });
});


