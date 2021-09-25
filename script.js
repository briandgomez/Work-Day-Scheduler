/*Make time blocks change color as the days go on
    1.Refer to asyncronous module 5 
    2. 5.4.6 = colors & 5.4.5 = current date
    3. 
*/

//Returns current date in 'Day of Week, Month, Day' format 
var currentDate = document.getElementById('currentDay');
var dateFormat = 'dddd, MMMM Do';
currentDate.textContent = moment().format(dateFormat);

var eventObj = {};
//Save new event
$(".saveBtn").on('click', function () {

    var text = $(this).siblings("textarea").val().trim();
    var timeBlock = $(this).parent().attr('id');

    //Returns current hour
    var eventTime = moment().hour();
    var eventDate = moment().format('MM/DD/YYYY');

    eventObj = {
        'text': text,
        'time': eventTime,
        'date': eventDate
    }

    localStorage.setItem(timeBlock, JSON.stringify(eventObj));

    eventStatus(timeBlock);
})

//Check event due date 
var eventStatus = function (param) {

    var objInfo = JSON.parse(localStorage.getItem(param));
    console.log(objInfo.time);
    
    $(this).each( function () {
        if (objInfo.time < 17) {
            console.log('before time')
        }
        else {
            console.log('after time')
        }
    })

}

