
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
    $('ul.catalog__names').on('click', 'li:not(catalog__name_active)', function () {
        $(this)
            // находим наш список, по клику на элемент ЛИ не содержащий активный класс, после чего добавляем ему этот самый активный класс, после находим его братьев на одном уровне и убираем у всех класс активности после идем на ближайщий контейнер и от туда ищем все наши обвертки куда спрятаны табы, убирая у всех класс активности и добавляем этот класс тому табу, который имеет такой же индекст, как и элемент ли
            .addClass('catalog__name_active')
            .siblings().removeClass('catalog__name_active')
            .closest('div.container').find('div.catalog__wrapper').removeClass('catalog__wrapper_active')
            .eq($(this).index()).addClass('catalog__wrapper_active');
    });
    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog__intro').eq(i).toggleClass('catalog__intro_active');
                $('.catalog__details').eq(i).toggleClass('catalog__details_active');
            })
        });
    };

    toggleSlide('.catalog__info');
    toggleSlide('.catalog__back');
});


