document.addEventListener("DOMContentLoaded", () => {

    // grab all the slides 
    let slides = document.querySelectorAll("#slider .slide");
    // set initial slide
    let currentSlide = 0;
    //grab both buttons
    const nextButton = document.querySelector(".button-right");
    const prevButton = document.querySelector(".button-left");

    function nextSlide() {
        // current slide becomes hidden
        slides[currentSlide].className = 'slide';
        // set the current slide as the next one
        currentSlide = (currentSlide + 1) % slides.length;
        // add the class showing to the slide to make it visible
        slides[currentSlide].className = 'slide showing';
    }

    function prevSlide() {
        // current slide becomes hidden
        slides[currentSlide].className = 'slide';
        // set the current slide as the previous one
        currentSlide = (currentSlide - 1) % slides.length;

        if (currentSlide == -1) {
            currentSlide = slides.length - 1;
        }
        // add the class showing to the slide to make it visible
        slides[currentSlide].className = 'slide showing';
    }

    nextButton.addEventListener("click", () => {
        // go to next slide on click of the button
        nextSlide();
    });
    prevButton.addEventListener("click", () => {
        // go to previous slide on click of the button
        prevSlide();
    });

    /* VERTICALLY ALIGN THE BUTTONS IN THE MIDDLE OF THE SLIDER TEXT
     */
    function positionSliderButton() {
        // grab the slider
        let slider = document.querySelector('.slide-text');
        // grab its height
        let sliderHeight = slider.getBoundingClientRect().height;
        // grab the button
        let buttons = document.querySelectorAll('.slider-button');

        // for each of the buttons
        for (button of buttons) {
            // get their height
            let buttonHeight = button.getBoundingClientRect().height;
            // position them right in the middle of the text,
            button.style.top = (((sliderHeight - buttonHeight) / 2).toString()) + "px";
        }
    }
    positionSliderButton();

    // whenever the window is resize, reposition the buttons
    window.addEventListener('resize', () => {
        positionSliderButton();
    });

});

$( document ).ready(function() {

    var opcionesnav = $('.navoption').length;
    var clickhamb=0;

    $("#hamburger").click(function(){
        clickhamb = 1;
        var header = $("#myTopnav");
        if (header[0].classList.length == 1) {
            header.addClass ("responsive");
            $("header").height((opcionesnav+1)*48);
            $(".navlist a:not(.icon)").css("display", "block");
            setTimeout(
                function()
                {
                    $(".navlist a:not(.icon)").css("transform", "translateX(0px)");
                }, 50);

        } else {
            $(".navlist a:not(.icon)").css("transform", "translateX(600px)");
            header.height(48);
            setTimeout(
                function()
                {
                    header.removeClass("responsive");
                    header.height(48);
                    $(".navlist a:not(.icon)").css("display", "none");
                }, 1600);
        }
    });


    $(window).on('resize', function(){
        console.log(clickhamb);
        if (($(window).width() > 600) && (clickhamb==1)){
            console.log(clickhamb + "     " + $(window).width());
            $("#myTopnav").height(48);
            $(".navlist a:not(.icon)").css("display", "block");
            setTimeout(
                function()
                {
                    $(".navlist a:not(.icon)").css("transform", "translateX(0px)");
                }, 500);
        }
    });

});