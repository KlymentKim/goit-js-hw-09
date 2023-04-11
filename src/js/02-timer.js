import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix, { Notify } from 'notiflix';

const dateTimePicker  = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");

let countdown;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      Notify.failure('Please choose a date in the future', 'Ok');
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

      
      days.textContent = daysLeft.toString().padStart(2, '0');
      hours.textContent = hoursLeft.toString().padStart(2, '0');
      minutes.textContent = minutesLeft.toString().padStart(2, '0');
      seconds.textContent = secondsLeft.toString().padStart(2, '0');

    if (distance < 0) {
      clearInterval(countdown);
      console.log(days.textContent = "00"); 
      hours.textContent = "00";
      minutes.textContent = "00";
      seconds.textContent = "00";
    }
  }, 1000);
});