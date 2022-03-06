// Date and time 
var myClock = document.getElementById("currentDay").textContent = moment().format('MMMM Do YYYY, h:mm a');

const times = [9, 10, 11, 12, 13, 14, 15, 16, 17]

//changed this to const
function toggleZoomScreen() {
    document.body.style.zoom = "85%";
}




toggleZoomScreen()


function colorChanger() {
    const d = new Date();
    let now = d.getTime();

    // const now = moment().format('H');
    //   for (let i = 0; i < times.length; i++) {/
    //added this
    for (const i of times) {

        if (now == i) {
            document.getElementById(i).className = "col-10 present"

        } else if (now > i) {

            document.getElementById(i).className = "col-10 future"

        } else if (now < i) {
            document.getElementById(i).className = "col-10 past"

        }

    }
}


// CHECK times AND RUN COLORCHANGE EVERY SECOND
$(function () {
    setInterval(colorChanger, 1000);
});

// STORE ALL NOTES
var store = [];
$(".saveBtn").click(function () {
    if (localStorage.getItem("store") !== null) {
        store = JSON.parse(localStorage.getItem('store'));
    }
    var times = $(this).parent().children()[0].innerHTML;
    var message = $(this).parent().children()[1].value;
    var add = {
        times: times,
        message: message
    };
    store.push(add);
    localStorage.setItem("store", JSON.stringify(store));
});

// RETRIEVE ALL NOTES FROM STORAGE
if (localStorage.getItem("store") !== null) {
    var storedData = JSON.parse(localStorage.getItem('store'));
    storedData.forEach(element => {
        var checktimes = element.times;
        var checkMsg = element.message;
        for (var i = 0; i < times.length; i++) {
            var checkId = $(`#${times[i]}`).parent().children()[0].innerHTML;
            if (checktimes == checkId) {
                $(`#${times[i]}`).parent().children()[1].textContent = checkMsg;
            }
        }
    });
}