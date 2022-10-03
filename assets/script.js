var currentDay = $('#currentDay')
var timeOfDay = $('#timeOfDay')
var textArea = $('#textArea')
var saveBtn = $('button')

currentDay.innerText = moment().format('dddd, MMM Do YYYY, h:mm a')
console.log(parseInt('8AM'))
console.log(moment().hour())
function saveNote() {
    
    // when button is clicked, save text to local storage
    // get items from local storage

}

function currentHour() {
    // if statement to display color on < currenthour, = currenthour, > currenthour
    var hourNow = moment().hour()
    // if ()
}

saveBtn.on('submit', saveNote)