
function formatTime(sec) {
    var time;
    var fixedSec = sec.toFixed(0);
    var min = (fixedSec/60).toFixed(0);
    var hours = (min/60).toFixed(0);
    var minutes = min % 60;
    var seconds = fixedSec % 60;
    if(Number.isInteger(min)==true) {
        time = min + ' min' + seconds + 'sec';
    }
    else if(Number.isInteger(hours)==true) {
        time = hours + 'h' + minutes + 'min' + seconds + 'sec';
    }
    else {
        time = fixedSec + 'sec';
    }
    return time;
}

exports.formatTime = time;