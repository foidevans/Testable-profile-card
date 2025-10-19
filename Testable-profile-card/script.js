const dateContainer = document.querySelector(".current-date");
const p = document.createElement('p');
dateContainer.appendChild(p);

const updateDate = ()=> {
    const $date = new Date(Date.now());
    const timeString =  `${$date.toLocaleTimeString()}.${$date.getMilliseconds()}`;
    p.textContent = timeString
}

updateDate();

setInterval(updateDate, 1000);