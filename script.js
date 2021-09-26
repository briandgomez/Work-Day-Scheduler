//Returns current date in 'Day of Week, Month, Day' format 
var currentDate = document.getElementById('currentDay');
var dateFormat = 'dddd, MMMM Do';
currentDate.textContent = moment().format(dateFormat);

var eventObj = {};
var timeNow = moment().format("HH");

//Save new event
$("textarea").on("click", function () {

})

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
    $('textarea').addClass('past');
    if (timeNow < timeBlockNum) {
        $('#hour-' + timeBlockNum).find('textarea').addClass('future');

    }
    else if (timeNow > timeBlockNum) {
        $('#hour-' + timeBlockNum).find('textarea').addClass('past');
    }
    else {
        $('#hour-' + timeBlockNum).find('textarea').addClass('present');

    }

}

/*var displayEvents = function () {
    var storageObj = JSON.parse(localStorage.getItem(eventObj));
    console.log(storageObj);
}*/