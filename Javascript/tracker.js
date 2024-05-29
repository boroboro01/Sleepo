let btn = document.querySelector('#btn')
let sidebar = document.querySelector('.sidebar')
btn.onclick = function () {
    sidebar.classList.toggle('active');
};
document.getElementById("open-popup-btn").addEventListener("click", function () {
    document.getElementsByClassName("popup")[0].classList.add("active");
})
document.getElementById("dismiss-popup-btn").addEventListener("click", function () {
    document.getElementsByClassName("popup")[0].classList.remove("active");
})

$(function() {
    var sleepData = getSleepData();
    $('.bar').each(function(index) {
        if (index < sleepData.length) {
            var hours = sleepData[index];
            var percentage = Math.min(hours / 8 * 100, 100);
            $(this).attr('data-hours', hours).animate({
                'height': percentage + '%'
            }, 1000);

            if(2 < hours && hours <= 4) {
                $(this).addClass('less');
                $(this).removeClass('very-less');
            } else if(hours <= 2) {
                $(this).addClass('very-less');
                $(this).removeClass('less');
            }
        }
    });
    for(let i=0;i<7;i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);

        const formattedDate = date.toLocaleDateString('en-US', {
            weekday: 'short',
            day: 'numeric'
        });

        $(`#day${8 - 1 - i}`).text(formattedDate);
    }
});
$(document).ready(function() {
    scheduleNextUpdate();
});

function getTodayDate() {
    const today = new Date();
    return today.getDate(); // 현재 날짜의 일(day) 반환
}
function getSleepData() {
    const data = localStorage.getItem('sleepData');
    return data ? JSON.parse(data) : [];
}
function saveSleepData(sleepData) {
    localStorage.setItem('sleepData', JSON.stringify(sleepData));
}

function updateSleepDataAtMidnight() {
    const sleepData = getSleepData();
    const todayDate = getTodayDate();

    if (sleepData.length >= 7) {
        sleepData.shift();
    }
    sleepData.push({ date: todayDate, hours: 0 });

    saveSleepData(sleepData);
    for(let i=0;i<7;i++) {
        const date = new Date();
        date.setDate(date.getDate() - i);

        const formattedDate = date.toLocaleDateString('en-US', {
            weekday: 'short',
            day: 'numeric'
        });

        $(`#day${8 - 1 - i}`).text(formattedDate);
    }
    scheduleNextUpdate();
}
function scheduleNextUpdate() {
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const delay = midnight.getTime() - now.getTime();

    setTimeout(updateSleepDataAtMidnight, delay);
}

function updateChart(time) {
    var sleepData = getSleepData();
    sleepData[sleepData.length - 1] = time;
    saveSleepData(sleepData);

    var $lastBar = $('.bar').last();
    var newHours = time;

    $lastBar.data('hours', newHours);
    $lastBar.attr('data-hours', newHours);

    var percentage = Math.min(newHours / 8 * 100, 100);

    $lastBar.animate({
        'height': percentage + '%'
    }, 1000);

    if (2 < newHours && newHours <= 4) {
        $lastBar.addClass('less');
        $lastBar.removeClass('very-less');
    } else if (newHours <= 2) {
        $lastBar.addClass('very-less');
        $lastBar.removeClass('less');
    }
}