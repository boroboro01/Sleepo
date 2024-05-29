window.onload = function () {
    $(document).ready(function(){
        const alarm = localStorage.getItem('alarm');
        if(alarm != null) {
            document.getElementById("times").style.display = 'none';
            document.getElementsByClassName("properTime")[0].classList.add('active');
            setAlarm(alarm);
        } else {
            console.log("There is no alarm")
        };
    })
    

    let btn = document.querySelector('#btn')
    let sidebar = document.querySelector('.sidebar')
    btn.onclick = function () {
        sidebar.classList.toggle('active');
    };

    document.querySelector("#reset").addEventListener("click", function () {
        localStorage.removeItem('alarm');
        window.location.reload();
    })
    document.getElementById("open-popup-btn").addEventListener("click", function () {
        document.getElementsByClassName("popup")[0].classList.add("active");
    })
    document.getElementById("dismiss-popup-btn").addEventListener("click", function () {
        document.getElementsByClassName("popup")[0].classList.remove("active");
    })
    document.getElementById("confirm-popup-btn").addEventListener("click", function () {
        let wakeup = document.getElementById("wake-up").value;
        let timeArr = calTime(wakeup);
        document.getElementById("time1").innerText = timeArr[0];
        document.getElementById("time2").innerText = timeArr[1];
        document.getElementById("time3").innerText = timeArr[2];
        document.getElementById("time4").innerText = timeArr[3];
        document.getElementById("time5").innerText = timeArr[4];
        document.getElementById("time6").innerText = timeArr[5];
        document.getElementsByClassName("popup")[0].classList.remove("active");
        document.getElementById("times").classList.remove("disable");
        document.getElementById("times").style.display = 'flex';
        document.getElementsByClassName("properTime")[0].classList.add("active");
    })
    document.getElementById("time1").addEventListener("click", function () {
        let selectTime = document.getElementById("time1").innerText;
        setAlarm(selectTime, 1); // 1:30 sleep
        // document.getElementsByClassName("properTime")[0].classList.remove("active");
    })
    document.getElementById("time2").addEventListener("click", function () {
        let selectTime = document.getElementById("time2").innerText;
        setAlarm(selectTime, 2); // 3:00 sleep
        // document.getElementsByClassName("properTime")[0].classList.remove("active");
    })
    document.getElementById("time3").addEventListener("click", function () {
        let selectTime = document.getElementById("time3").innerText;
        setAlarm(selectTime, 3); // 4:30 sleep
        // document.getElementsByClassName("properTime")[0].classList.remove("active");
    })
    document.getElementById("time4").addEventListener("click", function () {
        let selectTime = document.getElementById("time4").innerText;
        setAlarm(selectTime, 4); // 6:00 sleep
        // document.getElementsByClassName("properTime")[0].classList.remove("active");
    })
    document.getElementById("time5").addEventListener("click", function () {
        let selectTime = document.getElementById("time5").innerText;
        setAlarm(selectTime, 5); // 7:30 sleep
        // document.getElementsByClassName("properTime")[0].classList.remove("active");
    })
    document.getElementById("time6").addEventListener("click", function () {
        let selectTime = document.getElementById("time6").innerText;
        setAlarm(selectTime, 6); // 9:00 sleep
        // document.getElementsByClassName("properTime")[0].classList.remove("active");
    })

    function calTime(timeValue) {
        //Calculate wake-up time
        let date = new Date();
        let wakeupTime = [];

        date.setHours(timeValue.split(':')[0]);
        date.setMinutes(timeValue.split(':')[1]);
        for (let i = 0; i < 9; i++) {
            date.setHours(date.getHours() - 1);
            date.setMinutes(date.getMinutes() - 30);

            //Change format to AM/PM
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // 0시는 12시로 변환
            minutes = minutes < 10 ? '0' + minutes : minutes;
            let strTime = hours + ':' + minutes + ' ' + ampm;

            wakeupTime.push(strTime);
        }
        return wakeupTime;
    }
}