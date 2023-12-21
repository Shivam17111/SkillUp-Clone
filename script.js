document.addEventListener("DOMContentLoaded", function() {
    var progressBar = document.getElementById("progress-bar");
    var nav2=document.getElementById("nav2");
    window.onscroll = function() {
        updateProgressBar();
        navBar();
    };

    function updateProgressBar() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrollPercentage = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercentage + "%";
    }

    function navBar(){
        if(window.scrollY>200) {
            nav2.classList.add("nav2-container1");
            nav2.classList.add("nav2-scrolled");
        }else{
            nav2.classList.remove("nav2-container1");
            // nav2.classList.remove("nav2-scrolled");
        }
    }
});


document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginOverlay').style.display = 'flex';
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('loginOverlay').classList.add('submit-animation');
    document.getElementById('loginOverlay').addEventListener('animationend', function(){
        document.getElementById('loginOverlay').style.display='none';
        document.getElementById('loginOverlay').classList.remove('submit-animation');
    }, {once:true});
});

document.getElementById('submitBtn').addEventListener('click', function() {
    document.getElementById('loginOverlay').classList.add('submit-animation');
    document.getElementById('loginOverlay').addEventListener('animationend', function(){
        document.getElementById('loginOverlay').style.display='none';
        document.getElementById('loginOverlay').classList.remove('submit-animation');
    }, {once:true});
});

// document.getElementById('loginBtn1').addEventListener('click', function() {
//     document.getElementById('loginOverlay1').style.display = 'flex';
// });

// document.getElementById('closeBtn1').addEventListener('click', function() {
//     document.getElementById('loginOverlay1').classList.add('submit-animation');
//     document.getElementById('loginOverlay1').addEventListener('animationend', function(){
//         document.getElementById('loginOverlay1').style.display='none';
//         document.getElementById('loginOverlay1').classList.remove('submit-animation');
//     }, {once:true});
// });

// document.getElementById('submitBtn11').addEventListener('click', function() {
//     document.getElementById('loginOverlay1').classList.add('submit-animation');
//     document.getElementById('loginOverlay1').addEventListener('animationend', function(){
//         document.getElementById('loginOverlay1').style.display='none';
//         document.getElementById('loginOverlay1').classList.remove('submit-animation');
//     }, {once:true});
// });


var topButton=document.getElementById("topButton");

window.addEventListener("scroll", function(){
    if(document.documentElement.scrollTop>350 || this.document.body.scrollTop>350){
        topButton.style.display="block";
    }else{
        topButton.style.display="none";
    }
});



var currentIndex = 0;

function changeImage(n) {
    currentIndex+=n;
    showImage(currentIndex);
}

function showImage(index) {
    const textOverlays = document.querySelectorAll(".p3-swiper-overlay");
    const images = document.querySelectorAll(".p3-swiper-image");
    // console.log(images[1]);

    if(index>=images.length){
        currentIndex =0;
    }

    if(index<0){
        currentIndex = images.length - 1;
    }

    for(let i=0;i<images.length;i++){
        images[i].style.opacity = 0;
        textOverlays[i].style.opacity=0;
        textOverlays[i].style.top="60%";
    }

    images[currentIndex].style.opacity=1;
    textOverlays[currentIndex].style.opacity=1;
    textOverlays[currentIndex].style.top="50%";
}

function autoSwipe(){
    setInterval(() => {
        changeImage(1);
    },2000);
}

showImage(currentIndex);

autoSwipe();
