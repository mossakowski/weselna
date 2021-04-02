//422 dni od zaręczyn do kościoła
//

const el_bikers = document.getElementById('bikers');
const el_countdown = document.getElementById('countdown');
const el_heart_history = document.querySelector('.heart-history');

function calc_bikers_position() {
    let window_width = window.innerWidth;

    let date_now = moment();
    let date_wedding = moment("2021-08-12");
    let daysDiff = date_wedding.diff(date_now, "days");
    if (window_width >= 576) {
        let position_left = (daysDiff * 100) / 422;
        el_bikers.style.left = position_left + "%";
    } else {
        el_bikers.style.left = "45%";
    }
}

setInterval(function () {
    let time = countdown(moment(), moment("2021-08-12 13:00:00"), countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS).toString();
    el_countdown.textContent = time;
}, 1000)

el_heart_history.addEventListener('click', function() {
    alert('elo');
});

calc_bikers_position();