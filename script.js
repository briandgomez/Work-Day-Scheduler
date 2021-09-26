//Returns current date in 'Day of Week, Month, Day' format 
var currentDate = document.getElementById('currentDay');
var dateFormat = 'dddd, MMMM Do';
currentDate.textContent = moment().format(dateFormat);

var eventObj = {};
var timeNow = moment().format("HH");

//Retrieves and stores text stored in localStorage
$(".saveBtn").on('click', function () {

    var text = $(this).siblings("textarea").val().trim();

    //Returns string of the id (Ex:'hour-9')
    var timeBlockId = $(this).parent().attr('id');
    var timeBlockNum = parseInt(timeBlockId.match(/\d+/));

    localStorage.setItem(timeBlockNum, text);

    checkDueDate(timeBlockNum);
})

//Adds the apropriate background to each event
var checkDueDate = function (timeBlockNum) {
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

//Displays any event in localStorage
for (var i = 8; i <= 17; i++) {
    $("#hour-" + i).find('textarea').val(localStorage.getItem(i));
}