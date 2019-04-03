var changeTime = require('./timeFormat');
var os = require('os');
var colors = require('colors');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.green, type);
    console.log('Release:'.rainbow, release);
    console.log('CPU model:'.bgRed.yellow, cpu);
    console.log('Uptime: ~'.bold.zebra.bgCyan, changeTime.time(uptime));
    console.log('User name:'.italic.blue, userInfo.username);
    console.log('Home dir:'.trap.bgBlue, userInfo.homedir);
}

exports.print = getOSinfo;