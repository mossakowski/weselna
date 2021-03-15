//422 dni od zaręczyn do kościoła
//

const el_bikers = document.getElementById('bikers');
const el_countdown = document.getElementById('countdown');


function calc_bikers_position() {
    let window_width = window.innerWidth;

    let date_now = moment();
    let date_wedding = moment("2021-10-30");
    let daysDiff = date_wedding.diff(date_now, "days");
    if(window_width >= 576) {
        let position_left = (daysDiff * 100) / 422;
        el_bikers.style.left = position_left + "%";
    } else {
        el_bikers.style.left = "45%";
    }
}

console.log(window.innerWidth);


setInterval(function() {

let test = countdown( moment() ,moment("2021-10-30 13:00:00"), countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS ).toString();
el_countdown.textContent = test;
}, 1000)

calc_bikers_position();