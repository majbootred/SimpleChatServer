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
        element = 'element';
    });

    it('should behave like an array', function () {
        list.push(element);
        assert.equal(list.toString(), [element].toString());
    });

    it('should be empty at first', function () {
        assert.equal(list.toString(), [].toString());
    });

    it('should delete a needle', function () {
        list.push(element);
        list.deleteUsername(element);
        assert.equal(list.toString(), [].toString());
    });

    it('should return the same list if needle is not in the list', function () {
        list.push(element);
        var anotherElement = 'somethingElse';
        list.deleteUsername(anotherElement);
        assert.equal(list.toString(), [element].toString());
    });

    it('should delete all occurrences of the name', function () {
        var anotherElement = 'somethingElse';
        list.push(element);
        list.push(anotherElement);
        list.push(element);

        assert.equal(
            list.toString(),
            [element, anotherElement, element].toString()
        );
        list.deleteUsername(element);
        assert.equal(list.toString(), [anotherElement].toString());
    });

    it('should add new user name to empty list', function () {
        list.addNewUserName(element);
        assert.equal(list.toString(), [element].toString());
    });

    it('should modify double user names', function () {
        list.addNewUserName(element);
        list.addNewUserName(element);
        assert.equal(list.toString(), [element, 'element1' ].toString());
    });

    it('should modify triple user names', function () {
        list.addNewUserName(element);
        list.addNewUserName(element);
        list.addNewUserName(element);
        assert.equal(list.toString(), [element, 'element1', 'element2' ].toString());
    });

    it('should not modify different user names', function () {
        list.addNewUserName(element);
        var anotherElement = 'somethingElse';
        list.addNewUserName(anotherElement);
        assert.equal(list.toString(), [element, anotherElement].toString());
    });

});