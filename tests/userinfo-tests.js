/**
 * Created by bilge on 25/08/14.
 */
var userInfo = require('../js/userInfo');

describe('User Info function', function () {
    it('should say a new user', function () {
        var answer = userInfo.tellNewUser();
        return answer;
    });
});
