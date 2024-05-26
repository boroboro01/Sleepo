let index = 0;

document.getElementById("open-popup-btn").addEventListener("click", function () {
    document.getElementsByClassName("popup")[0].classList.add("active");
})
document.getElementById("dismiss-popup-btn").addEventListener("click", function () {
    index = 0;
    setIndex(index);
    document.getElementsByClassName("popup")[0].classList.remove("active");
})
document.getElementById("confirm-popup-btn").addEventListener("click", function () {
    index = index + 1;
    setIndex(index);
})

function setIndex(value) {
    index = value;
    if (index == 0) {
        document.getElementById("description").innerHTML = 
        '우리는 삶의 3분의 1이나 되는 많은 시간을 잠을 자면서 지내게 됩니다. <br>대한수면학회에 따르면 일상 생활을 유지하기 위하여 하루 <span>6 ~ 8시간</span>의 수면을 취해야 한다고 합니다.<br>이 처럼 중요한 수면을 잘 관리하고 계신가요?<br>매일 아침 일어나기 힘들지는 않으신가요?<br>그것을 도와드리기 위해 이러한 웹 사이트를 준비했습니다.';
    } else if(index == 1) {
        document.getElementById("description").innerHTML = 
        '우리의 수면패턴은 비렘수면 5단계와 렘수면 1단계를 거칩니다.<br> 이 6단계를 합쳐서 하나의 사이클이라고 합니다.<br>해당 사이클은 <span>1시간 30분</span>의 주기를 가지고 있습니다.<br>여기서 가장 얕은 잠을 잘 때인 <span>비렘수면 1단계</span>에서 몸이 깨어야 개운하고 푹 잔 느낌이 들게 됩니다.';
    } else if(index == 2) {
        document.getElementById("description").innerHTML = 
        '홈 화면으로 돌아가서 <span>메자마시군(빨간 시계 모습의)</span>을 클릭하세요!<br> 일어나고 싶은 시간을 알려주기만 하면 알아서 시간을 계산하고 알람을 설정해줄 거에요!<br> 그럼 오늘도 좋은 밤 보내시길 바랄게요<br>'
    } else if(index >= 3) {
        index = 0;
        document.getElementsByClassName("popup")[0].classList.remove("active");
    }
}