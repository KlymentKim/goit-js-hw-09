import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dateTimePicker  = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
}

let countdown;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      window.alert("Please choose a date in the future");
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};

flatpickr(dateTimePicker, options);

startButton.addEventListener("click", () => {
  const selectedDate = new Date(dateTimePicker.value);
  countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = selectedDate - now;

    const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

    days.textContent = daysLeft < 10 ? `0${daysLeft}` : daysLeft;
    hours.textContent = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
    minutes.textContent = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
    seconds.textContent = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;

    if (distance < 0) {
      clearInterval(countdown);
      console.log(days.textContent = "00"); 
      hours.textContent = "00";
      minutes.textContent = "00";
      seconds.textContent = "00";
    }
  }, 1000);
});