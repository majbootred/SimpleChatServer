/**
 * Created by lopper on 27.08.14.
 */
var statisticFile = require('../js/statisticFile');
var assert = require('assert');

describe('Exceptions Tests', function () {
    it('should not read', function (next) {
        assert.throws(
            function () {
                statisticFile.readFile('serverlogA.log' );

            }

        );
    });
});
