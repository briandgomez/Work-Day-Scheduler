//Returns current date in 'Day of Week, Month, Day' format 
var currentDate = document.getElementById('currentDay');
var dateFormat = 'dddd, MMMM Do';
currentDate.textContent = moment().format(dateFormat);

var eventObj = {};
var timeNow = moment().format("HH");
//Save new event
$(".saveBtn").on('click', function () {

    var text = $(this).siblings("textarea").val().trim();

    //Returns string of the id (Ex:'hour-9')
    var timeBlockId = $(this).parent().attr('id');
    var timeBlockNum = parseInt(timeBlockId.slice(-2));

    eventObj = {
        'text': text,
        'time': timeBlockNum,
    }

    localStorage.setItem(timeBlockId, JSON.stringify(eventObj));

    eventDue(timeBlockNum);
})

var eventDue = function (timeBlockNum) {
    if (timeNow === timeBlockNum) {
        $('#hour-' + timeBlockNum).find('textarea').addClass('present');
    }
    else if (timeNow < timeBlockNum) {
        $('#hour-' + timeBlockNum).find('textarea').addClass('future');
    }
    else if (timeNow > timeBlockNum) {
        $('#hour-' + timeBlockNum).find('textarea').addClass('past');
    }
}