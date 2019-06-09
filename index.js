var fs = require('fs');
var colors = require('colors');
var os = require('os');


fs.readdir('./', function(err, data) {
    if (err) throw err;
    var dataJSON = JSON.stringify(data);
    console.log('data: ' + dataJSON);
    for(var i = 0 ; i <dataJSON.length ; i++) {
        return dataJSON[i] + '\n';
    }
    console.log('data: ' + dataJSON);
    fs.writeFile('message.txt', data, function(err) {  
        if (err) throw err;
        console.log('Zapisano!'.blue);
    });
});