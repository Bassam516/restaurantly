/*show video*/
let btnVideo = document.getElementById("btn-video"),
    sectionVideo = document.getElementsByClassName("video"),
    closeIcon = document.getElementById("close"),
    video = document.getElementById("video");
let interval;
$(sectionVideo).hide();

btnVideo.addEventListener("click", () => {
    $(sectionVideo).fadeIn(500,"swing");
    //video.autoplay = true; //auto play video in your device
    //video.load();
    $('.video iframe')[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*'); //auto play ifram video
    document.body.style.overflow = "hidden";
    clearInterval(interval);
});

closeIcon.addEventListener("click", () => {
    //video.pause(); //stop video in your device
    $('.video iframe')[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*'); //stop ifram video
    $(sectionVideo).hide(300, "swing");
    interval= setInterval(function () {
        document.body.style.overflowY = "scroll";
   }, 100);
    
});

/*active navbar link*/

let addClassOnScroll = function () {
    let windowTop = $(window).scrollTop();
    $('section[id]').each(function (index, elem) {
        let offsetTop = $(elem).offset().top;
        let outerHeight = $(this).outerHeight(true);

        if (windowTop > (offsetTop - 50) && windowTop < (offsetTop + outerHeight)) {
            let elemId = $(elem).attr('id');
            $("nav .navbar-collapse ul li a.active").removeClass('active');
            $("nav .navbar-collapse ul li a[href='#" + elemId + "']").addClass('active');
        }
    });
};

$(function () {
    $(window).on('scroll', function () {
        addClassOnScroll();
    });
});

/*hide intro when scroll*/
let intro = document.getElementById("intro"),
    nav = document.getElementById("nav");

$(window).scroll(function () {

    //$(this).scrollTop() >= 100 ? intro.style.display = "none" : intro.style.display = "block";
    if ($(this).scrollTop() >= 100) {
        intro.style.display = "none";
        $("#nav").addClass("nav-scroll");
    } else {
        nav.style.marginTop = "40px";
        intro.style.display = "block";
        $("#nav").removeClass("nav-scroll");
    }
});

/*shuffle section*/
$(function () {
    'use strict';

    /*menu shuffle*/
    $('.menu .menu-list ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.menu .menu-items #items').fadeIn(800);
        } else {
            $('.menu .menu-items #items').hide();
            $($(this).data('class')).fadeIn(800);

        }
    });

    /*specials shuffle*/
    $('.specials .specials-list ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');

        $('.specials .specials-plate #specials-items').hide();
        $($(this).data('class')).fadeIn(800);
        
    });

});

/*scroll top*/

$(document).ready(() => {
    let topBtn = $("#top");

    $(window).scroll(() => {
        $(this).scrollTop() >= 700 ? topBtn.fadeIn() : topBtn.fadeOut();
    });

    topBtn.click(() => {
        $("html , body").animate({ scrollTop:0 }, 100);
    });

});

/*carousel duration*/
$(document).ready(function () {
    $(".carousel").carousel({
        interval: 6000,
        pause: false
    });
});

/*testimonials swiper*/
let swiper = new Swiper(".mySwiper", {
    slidesPerView: window.innerWidth<=991 ? 1 : 3,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
/*gallery swiper*/
let swiper3 = new Swiper(".mySwiper3",{
    spaceBetween: 0,
    slidesPerView: 1,
    //freeMode: true,
});
let swiper2 = new Swiper(".mySwiper2", {
    //loop: true,
    //loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    thumbs: {
        swiper: swiper3,
    },
});

/*gallery swiper*/

$(function () {
    $(".gallery .gallery-swiper").hide();

    $(".gallery .photos ul li").on('click', function () {
        $(".gallery .gallery-swiper").fadeIn(200, "swing");
        document.body.style.overflow = "hidden";
    });

    $("#close-swiper").on('click', () => {
        $(".gallery .gallery-swiper").fadeOut(200, "swing");
       // $(".gallery .photos ul").css("transform", "translate3d(0px,0px,0px)");
        document.body.style.overflowY = "scroll";

    });
});

/*loading*/
$(window).on("load", function () {
    $(".spinner").fadeOut(2000, function () {
        $(this).parent().fadeOut(2000, function () {
            $(this).remove();
        });
    });
    AOS.init({ once: true });
});






    



