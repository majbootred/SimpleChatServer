exports.helloWorld = function() {
    return 'Hello World\n';
};

exports.deleteSlashFromPathName = function(str) {
    return str.substr(1, str.length);
}