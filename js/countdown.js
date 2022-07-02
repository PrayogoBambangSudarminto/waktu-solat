const starTingMinutes = 10;
let time = starTingMinutes * 60;

const countDownEl = document.querySelector(".countdown");

setInterval(updateCountdown, 1000);
function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;
  countDownEl.innerHTML = minutes+":"+seconds;
  time--
  time = time < 0 ? 0 : time; 
}

// set date //
const dateElement = document.querySelector(".text4");
        
        function formatDate(date) {
    const MONTHS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    return ` ${
        MONTHS[date.getMonth()]
    } ${date.getDate()} ${date.getFullYear()}`;
    }
    setInterval(() => {
  const now = new Date();
  dateElement.textContent = formatDate(now);
    }, 200);
