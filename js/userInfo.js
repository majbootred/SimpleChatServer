/**
 * Created by bilge on 25/08/14.
 */
var userCount = 0;

exports.tellNewUser = function() {
        userCount += 1;
        console.log("There is a new user " + userCount + "\n");
};