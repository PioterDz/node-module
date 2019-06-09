var fs = require('fs');
var colors = require('colors');
var os = require('os');


fs.readdir('./', function(err, data) {
    if (err) throw err;
    // var dataJSON = JSON.stringify(data);
    // console.log('data: ' + dataJSON);
    console.log('data: ' + data);
    fs.writeFile('message.txt', data, function(err) {  
        if (err) throw err;
        console.log('Zapisano!'.blue);
    });
});