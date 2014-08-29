"use strict";

var list = (function () {
    var listOfUsers = [];
    listOfUsers.deleteUsername = function (needle) {
        var index = this.indexOf(needle);
        if (index > -1) {
            console.log('Removing ' + this[index] + ' from user list of users.');
            this.splice(index, 1);
        }
    };

    return listOfUsers;

}());


module.exports = list;