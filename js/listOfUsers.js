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

    listOfUsers.concatenateUsernameWithPostfix = function (user, number) {
        return user + number.toString();
    };

    listOfUsers.isInList = function (needle) {
        return this.indexOf(needle) !== -1;
    };

    listOfUsers.addUniqueUserName = function (user) {
        var postfix = 0,
            potentialUserName = user;

        function increasePostfix() {
            postfix = postfix + 1;
        }

        function addToList(user) {
            listOfUsers.push(user);
        }

        while (this.isInList(potentialUserName)) {
            increasePostfix();
            potentialUserName = this.concatenateUsernameWithPostfix(user, postfix);
        }

        addToList(potentialUserName);
        return potentialUserName;
    };


    return listOfUsers;

}());


module.exports = list;