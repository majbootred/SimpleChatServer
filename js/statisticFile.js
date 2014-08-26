var filesystem = require('fs');
const fileName = "serverlog.log";
var userCount=0;

readFile = function(){
    filesystem.readFile(fileName, function(error,data) {
        if(error) {
            console.log(error);
        } else {
            userCount=data;
            console.log("Data:" + data);
        }

    })
}


writeFile = function(content){
    filesystem.writeFile(fileName, content, function(error) {
        if(error) {
            console.log(error);
        } else {
            console.log("File was saved!");
        }
    })
}


writeFile(5);
readFile();
console.log("UserCount: " + userCount);