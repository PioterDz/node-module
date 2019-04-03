
function formatTime(sec) {
    var min = (sec/60).toFixed(0);
    var hours = (min/60).toFixed(0);
    var minutes = min % 60;
    var seconds = sec % 60;

    console.log(hours + 'h' + minutes + 'min' + seconds + 'sec');

}

exports.time = formatTime;