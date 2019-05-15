const formatDate = (timeInSeconds) => {
    var day = Math.floor(timeInSeconds / (86400));
    var hour = Math.floor((timeInSeconds % 86400) / 3600);
    var minute = Math.floor((timeInSeconds % 3600) / 60);
    var second = Math.floor((timeInSeconds % 360) % 60);

    var displayDay = day > 0 ? day + 'd' : '';
    var displayHour = hour > 0 ? day > 0 ? ' ' + hour + 'h' : hour + 'h' : '';
    var displayMinute = minute > 0 ? hour > 0 || day > 0 ? ' ' + minute + 'm' : minute + 'm' : '';
    var displaySecond = !timeInSeconds ? '0s' : second > 0 ? minute > 0 || hour > 0 ? ' ' + second + 's' : second + 's' : '';


    //return displayDay + displayHour + displayMinute + displaySecond;

    return `${displayDay}` + `${displayHour}` + `${displayMinute}` + `${displaySecond}`;
}

module.exports = formatDate;