var fs = require('fs');
var colors = require('colors');

fs.readdir('./', function(err, data) {
    if (err) throw err;
    data.forEach(item => {
        fs.appendFile('message.txt', `${item} \r\n`, (err) => {  
            if (err) throw err;
            console.log('Zapisano!'.blue);
        });
    });
});