var statistics = (function () {
    "use strict";
    return {
        printStatistics: function (listOfCurrentUsers) {
            var numberOfActiveUsers,
                statistics,
                i;
            numberOfActiveUsers = listOfCurrentUsers.length;
            console.log(numberOfActiveUsers + ' active user(s).');
            statistics = "Here you can see our statistics"
                + "<br />" +
                "Number of active users: " + numberOfActiveUsers;
            for (i = 0; i < numberOfActiveUsers; i = i + 1) {
                statistics += "<br />" + listOfCurrentUsers[i];
            }
            return statistics;
        }
    };
}());

module.exports = statistics;
