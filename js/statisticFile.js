var filesystem = require('fs');
//const fileName = "serverlogAjlkjk.log";
var userCount = 0;


exports.readFile = function (fileName) {
    var errorCallBack = function(error) {
        throw error;
    };
    filesystem.readFile(fileName, function (error, data) {
        if (error) {
            console.log('Error reading file: ' + error);
            errorCallBack(error);
 //           next(error);
        } else {
            userCount = data;
            console.log("Read Data:" + data);
        }
        console.log('fertig file lese');
//        next();
     });
    console.log('fertig mit funktion readFile');
};


exports.writeFile = function (content) {
    filesystem.writeFile(fileName, content, function (error) {
        try {
            if (error) {
                throw error;
                //console.log(error);
            } else {
                console.log("File was saved!");
            }
        }
        catch (error) {
            console.log(error);
        }

    })
}


//writeFile(5);
//readFile();
//console.log("UserCount: " + userCount);