let interval = null;

function setAlarm(selectTime, time) {
    document.getElementById("times").classList.add("disable");
    document.getElementById("bubbleTitle").innerText = "잠들기까지 남은 시간은...";
    localStorage.setItem('alarm', selectTime);
    const alarmTime = parseTime(selectTime);

    if (!alarmTime) {
        alert('Invalid time format. Please enter time as HH:MM AM/PM');
        return;
    }

    if (interval !== null) {
        clearInterval(interval);
        interval = null;
    }

    const countdownTimer = document.getElementById('countdownTimer');
    interval = setInterval(() => {
        const now = new Date();
        const diff = alarmTime.getTime() - now.getTime();

        if (diff <= 0) {
            clearInterval(interval);
            countdownTimer.textContent = "It's time!";
            alert("It's time!");
            return;
        }

        const hours = Math.floor(diff / 1000 / 60 / 60);
        const minutes = Math.floor(diff / 1000 / 60) % 60;
        const seconds = Math.floor(diff / 1000) % 60;
        countdownTimer.textContent = `${hours}시간 ${minutes}분 ${seconds}초 남았어요`;
    }, 1000);

    switch (time) {
        case 1:
            updateChart(2);
            console.log("update chart with 2");
            break;
        case 2:
            updateChart(3);
            break;
        case 3:
            updateChart(5);
            break;
        case 4:
            updateChart(6);
            break;
        case 5:
            updateChart(8);
            break;
        case 6:
            updateChart(8);
            break;
    }
}

function parseTime(inputTime) {
    const timeParts = inputTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!timeParts) {
        return null;
    }

    let hours = parseInt(timeParts[1], 10);
    const minutes = parseInt(timeParts[2], 10);
    const period = timeParts[3].toUpperCase();

    if (hours === 12) {
        hours = period === 'AM' ? 0 : 12;
    } else if (period === 'PM') {
        hours += 12;
    }

    const date = new Date();
    date.setHours(hours, minutes, 0, 0);

    // Adjust date if it's set to past
    if (date < new Date()) {
        date.setDate(date.getDate() + 1);
    }

    return date;
}
