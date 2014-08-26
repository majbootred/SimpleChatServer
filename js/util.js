exports.helloWorld = function() {
    return 'Hello World\n';
};

exports.getPathnamefromURL = function(str) {
    return str.substr(1, str.length);
}