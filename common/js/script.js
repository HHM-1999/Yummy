let valueDisplay = document.querySelectorAll(".num");
let interval = 1000;


console.log(valueDisplay);

valueDisplay.forEach((valueDisplay) => {
    let startval = 0;
    let endval = parseInt(valueDisplay.getAttribute("data-val"));
    let timing = Math.floor(interval / endval);
    let counter = setInterval(() => {
        startval = startval + 1;
        valueDisplay.textContent = startval;
        if (startval == endval) {
            clearInterval(counter);
        }
    }, timing);
});





///gallery
$('.center').slick({
    centerMode: true,
    dots: true,
    centerPadding: '70px',
    slidesToShow: 5,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

///event
$('.responsive').slick({
    centerMode: true,
    dots: true,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});