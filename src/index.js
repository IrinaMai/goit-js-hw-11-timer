import './styles.css';



class CountdownTimer {
    constructor({selector, targetDate}) {
        this.timer = document.querySelector(selector);
        this.targetDate = targetDate.getTime(); 
        this.days = "";
        this.hours = "";
        this.mins = "";
        this.secs = "";
    }
    getCurrentTime() {
        return new Date().getTime();
    }
    daysCalculator() {
        setInterval(() => {
            let time = this.targetDate - this.getCurrentTime();
            this.days= Math.floor(time / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            this.secs = Math.floor((time % (1000 * 60)) / 1000);
            this.displayData();
        }, 1000)
    }
    displayData() {
        this.daysRef = this.timer.querySelector('[data-value="days"]').textContent = this.days;
        this.hoursRef = this.timer.querySelector('[data-value="hours"]').textContent = this.hours;
        this.minsref = this.timer.querySelector('[data-value="mins"]').textContent = this.mins;
        this.secsRef = this.timer.querySelector('[data-value="secs"]').textContent = this.secs;
    }
 
   
};



const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});
timer1.daysCalculator();



const myBirthDay = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('jan 11, 2021'),
});
myBirthDay.daysCalculator();


