"use strict";

var list = (function () {
    var listOfUsers = [];
    listOfUsers.deleteUsername = function (needle) {
        var index = this.indexOf(needle);
        while (index > -1) {
            console.log('Removing ' + this[index] + ' from user list of users.');
            this.splice(index, 1);
            index = this.indexOf(needle);
        }
    };

    return listOfUsers;

}());


module.exports = list;