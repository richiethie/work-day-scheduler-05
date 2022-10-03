var currentDay = $('#currentDay')
var timeOfDay = $('.hour')
var textArea = $('.form-control')
var saveBtn = $('button')
var timeSection = $('.input-group')

currentDay.innerText = moment().format('dddd, MMM Do YYYY, h:mm a')


function saveNote() {
    var inputValue = textArea.val()
    console.log(inputValue)
    // when button is clicked, save text to local storage
    // get items from local storage

}

function currentHour() {
    // if statement to display color on < currenthour, = currenthour, > currenthour
    timeSection.each(function() {
        var hourLoop = parseInt($(this).attr('id')[1])
        var hourNow =  18 //moment().hour()
        console.log(hourLoop)
        console.log(hourNow)
        if (hourNow > hourLoop) {
            $(textArea).removeClass('present')
            $(textArea).removeClass('future')
            $(textArea).addClass('past')
        } else if (hourNow === hourLoop) {
            $(textArea).removeClass('past')
            $(textArea).removeClass('future')
            $(textArea).addClass('present')
        } else {
            $(textArea).removeClass('past')
            $(textArea).removeClass('present')
            $(textArea).addClass('future')
        }
    })
    
}
saveNote()
currentHour()
saveBtn.on('click', saveNote)
