//422 dni od zaręczyn do kościoła
//

const el_bikers = document.getElementById('bikers');
const el_countdown = document.getElementById('countdown');
const btn_heart_open_history = document.querySelector('.heart-open-history');
const el_bg_history = document.querySelector('.bg-history');

const btn_close_history = document.querySelector('.btn-close-history');

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

btn_heart_open_history.addEventListener('click', function() {
    // el_bg_history.style.display = "block";
    let arr = 'align-items-center justify-items-center d-flex';
    el_bg_history.classList.add('align-items-center', 'justify-content-center','d-flex', 'flex-column');
});

btn_close_history.addEventListener('click', function() {
    el_bg_history.classList.remove('align-items-center', 'justify-content-center','d-flex', 'flex-column');
})

calc_bikers_position();