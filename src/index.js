import './styles.css';

const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    mins: document.querySelector('[data-value="mins"]'),
    secs: document.querySelector('[data-value="secs"]'),
    selector:document.querySelector('#timer-1'),
};



const countDownTimer = {
    finish() {
        const finalDate = new Date(2021, 0, 11).getTime()
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = finalDate - currentTime;
            daysCalculator(deltaTime);
        }, 1000);
    },
    
};

countDownTimer.finish();


function daysCalculator(time) {
    const days = String(Math.floor(time/ (1000 * 60 * 60 * 24))).padStart(3,'0');
    const hours = modify(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = modify(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = modify(Math.floor((time % (1000 * 60)) / 1000));
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.mins.textContent = mins;
    refs.secs.textContent = secs;
};


const modify = (value) => {
   return String(value).padStart(2, "0")
}





