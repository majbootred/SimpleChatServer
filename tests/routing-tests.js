var util = require('../js/util');
var server = require('../js/server')
var assert = require('assert');

describe('Routing test', function() {
    it('should remove the first char from string', function() {
        assert.equal("emma", util.deleteSlashFromPathName("/emma"));
    });

    it('should print hello emma to emma', function() {
        var str = "emma";
        assert.equal("Hello emma!", server.printHelloUser(str));
    });

    it('should ??? when requesting favicon', function() {
        var str = "favicon.ico";
        assert.equal(null, server.printHelloUser(str));
    });
});


