/*Make time blocks change color as the days go on
    1.Refer to asyncronous module 5 
    2. 5.4.6 = colors & 5.4.5 = current date
    3. 
*/

//Returns current date in 'Day of Week, Month, Day' format 
var currentDate = document.getElementById('currentDay');
var dateFormat = 'dddd, MMMM Do';
currentDate.textContent = moment().format(dateFormat);

//Save new event
$(".saveBtn").on('click', function () {
    var val = $(this).siblings("textarea").val().trim();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, val);
    
    //Returns current hour
    var currentTime = moment().hour();
    console.log(currentTime);
    var currentDate2 = moment().format('MM/DD/YYYY');
    console.log(currentDate2);
    
})

//Check event due date 
