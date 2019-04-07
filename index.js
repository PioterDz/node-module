var fs = require('fs');
var colors = require('colors');


fs.readdir('./', function(err, data) {
    if (err) throw err;
    console.log('data: ' + data);
    fs.writeFile('message.txt', data, function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
    });
});