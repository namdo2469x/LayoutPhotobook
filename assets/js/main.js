// Slider
$(document).ready(function () {
    const nextIcon = '<div class="nexticon">Next testimonial  <img src="assets/icon/next arrow.png" alt=""></div>';

    $('.owl-carousel').owlCarousel({
        autoplay: true,
        loop: true,
        margin: 10,
        items: 1,
        nav: true,
        navText: [
            'prev',
            nextIcon
        ],
    })
});


