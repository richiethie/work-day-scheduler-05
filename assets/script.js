var currentDate = $('#currentDate')
var timeOfDay = $('.hour')
var textArea = $('.form-control')
var saveBtn = $('button')
var timeSection = $('.input-group')

var displayDate = moment().format('dddd, MMM Do YYYY, h:mm a')
currentDate.html(displayDate)

function currentHour() {
    // if statement to display color on < currenthour, = currenthour, > currenthour
    textArea.each(function() {
        var hourLoop = parseInt($(this).attr('id'))
        var hourNow = moment().hour()
        console.log(hourLoop)
        console.log(hourNow)
        if (hourNow > hourLoop) {
            $(this).removeClass('present')
            $(this).removeClass('future')
            $(this).addClass('past')
        } else if (hourNow === hourLoop) {
            $(this).removeClass('past')
            $(this).removeClass('future')
            $(this).addClass('present')
        } else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')
        }
    })
    
}

function saveNote() {
    var inputValue = $(this).siblings('.form-control').val()
    var hourNumber = $(this).siblings('.form-control').attr('id')
    console.log($(this).siblings('.form-control').attr('id'))
    // when button is clicked, save text to local storage
    // get items from local storage
    localStorage.setItem(hourNumber, inputValue)

}

$(".input-group #8").val(localStorage.getItem("8"));
$(".input-group #9").val(localStorage.getItem("9"));
$(".input-group #10").val(localStorage.getItem("10"));
$(".input-group #11").val(localStorage.getItem("11"));
$(".input-group #12").val(localStorage.getItem("12"));
$(".input-group #13").val(localStorage.getItem("13"));
$(".input-group #14").val(localStorage.getItem("14"));
$(".input-group #15").val(localStorage.getItem("15"));
$(".input-group #16").val(localStorage.getItem("16"));
$(".input-group #17").val(localStorage.getItem("17"));
$(".input-group #18").val(localStorage.getItem("18"));

saveNote()
currentHour()
saveBtn.on('click', saveNote)
