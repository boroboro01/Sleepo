let btn = document.querySelector('#btn')
let sidebar = document.querySelector('.sidebar')
btn.onclick = function () {
    sidebar.classList.toggle('active');
};

let index = 0;
$('.sleepGirl').click(function () {
    index ++;
    nextVideo();
});





function nextVideo() {
    if(index === 0) {
        $('.youtube').attr('src', "https://www.youtube.com/embed/l_6S4xwX9ng?si=bbxG930nm4qR6EkY");
    } else if (index === 1) {
        $('.youtube').attr('src', "https://www.youtube.com/embed/jfKfPfyJRdk?si=A1y433q4CUJ0yc-3");
    } else if (index === 2) {
        $('.youtube').attr('src', "https://www.youtube.com/embed/U6Ay9v7gK9w?si=mHJlk1iIfgZx0QOn");
    } else {
        $('.youtube').attr('src', "https://www.youtube.com/embed/l_6S4xwX9ng?si=bbxG930nm4qR6EkY");
        index = 0;
    }
}