document.body.onload = function() {
    setTimeout(function() {
        let preloader = document.querySelector('.preloader');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 1000)
}

document.addEventListener('DOMContentLoaded', function() {
    //sort courses
    if (document.querySelector(".course__wrap")) {
        let mixer = mixitup(".course__wrap", {
            load: {
                filter: 'all',
                sort: 'default'
            }
        });
    }

    //chart 
    if (document.getElementById('myChart')) {
        let ctx = document.getElementById('myChart').getContext('2d');
        let chart = new Chart(ctx, {
            type: 'line',

            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Rating',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [5, 2, 4, 2, 5, 3, 4]
                }]
            },

            options: {

            }
        });
    }

    //validate form

    new JustValidate('.form-admin', {
        rules: {
            name: {
                required: true,
                minLength: 2
            },

            author: {
                required: true,
                minLength: 2
            },

            hour: {
                required: true
            },

            min: {
                required: true
            },

            rating: {
                required: true,

            }


        },
        messages: {
            name: {
                required: "Поле должно быть заполнeно",
                minLength: "Имя должно быть больше двух символов"
            },

            author: {
                required: "Поле должно быть заполнeно",
                minLength: "Имя должно быть больше двух символов"
            },

            hour: {
                required: "Поле должно быть заполнeно"
            },

            min: {
                required: "Поле должно быть заполнeно"
            },

            rating: {
                required: "Поле должно быть заполнeно",
            },

        },
        submitHandler: function(form, values, ajax) {
            ajax({
                url: "mail.php",
                method: 'POST',
                data: values,
                async: true,
                callback: function(response) {
                    alert("Форма отправлена");
                },
                error: function(response) {
                    alert("Хьюстон, у нас проблемы")
                }
            });
        },
    });

});


$(document).ready(function() {
    $('.burger-menu__button').click(function(event) {
        $('.burger-menu__button,.burger-menu__line, .burger-menu').toggleClass('active');
    })
})