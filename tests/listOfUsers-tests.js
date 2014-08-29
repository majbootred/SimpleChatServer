"use strict";

var list = require('../js/listOfUsers.js');
var assert = require('assert');

describe('The list', function () {

    var element;

    list.reset = function () {
        this.splice(0, this.length);
    };

    beforeEach(function () {
        list.reset();
        element = 'element1';
    });

    it('should behave like an array', function () {
        list.push(element);
        assert.equal([element].toString(), list.toString());
    });

    it('should be empty at first', function () {
        assert.equal([].toString(), list.toString());
    });

    it('should delete a needle', function () {
        list.push(element);
        list.deleteUsername(element);
        assert.equal([].toString(), list.toString());
    });

    it('should return the same list if needle is not in the list', function() {
        list.push(element);
        var anotherElement = 'somethingElse';
        list.deleteUsername(anotherElement);
        assert.equal([element].toString(), list.toString());

    })
});