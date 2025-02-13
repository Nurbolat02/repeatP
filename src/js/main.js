
$(document).ready(function () {
    $('.my-slider').slick({
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img class="left-arrow" src="./icons/left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="right-arrow" src="./icons/right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,

                }
            }]
    })

    $("#myfirstform").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "кто хороший мальчик?",
                minlength: jQuery.validator.format("хотя бы две буковки")
            },
            email: {
                required: "нужна почта, а не вот это вот всё",
                email: "ну это даже не похоже на email..."
            }
        }
    });
    $('#telnumber').mask("+7 (999) 999-99-99");
    $("#mybutton").click(function (event) {
        event.preventDefault(); // Останавливаем стандартное поведение кнопки
    });
});

// $(document).ready(function () {
//     function updateDotsStyle() {
//         if ($(window).width() <= 768) {
//             $(".slick-slider-dots").css("display", "flex");
//         } else {
//             $(".slick-slider-dots").css("display", "");
//         }
//     }

//     // Вызываем функцию при загрузке страницы
//     updateDotsStyle();

//     // Отслеживаем изменение размера окна
//     $(window).resize(function () {
//         updateDotsStyle();
//     });
// });

