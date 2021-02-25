if (document.querySelector('.preloader')) {
    document.body.onload = function() {
        setTimeout(function() {
            let preloader = document.querySelector('.preloader');
            if (!preloader.classList.contains('done')) {
                preloader.classList.add('done');
            }
        }, 1000)
    }
}



//validation callback form
if (document.querySelector('.validate')) {
    let forms = document.querySelector('.validate');
    for (var i = 0; i < forms.length; i++) {
        forms[i].setAttribute('novalidate', true);
    }

    let hasError = function(field) {
        // Get the error
        if (field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') return;

        let validity = field.validity;
        if (validity.valid) return;
        if (validity.badInput) return 'Пожалуста заполните поле.';
        // If field is required and empty
        if (validity.valueMissing) {
            return 'Пожалуста заполните поле.';
        }
        if (validity.typeMismatch) {
            if (field.type === 'email') {
                return 'Пожалуста введите коректный email.';
            }
            if (field.type === 'tel') {
                return 'Пожалуста вводите только цифри.';
            }

        }
        if (validity.tooShort) {
            return 'Пожалуйста, удлините этот текст до ' +
                field.getAttribute('minLength') + ' символов или более. Вы в настоящее время используете ' +
                field.value.length + ' сиволов.';

        }

        if (validity.tooLong) {
            return 'Сократите этот текст до не более чем ' +
                field.getAttribute('maxLength') +
                ' символы. Вы в настоящее время используете ' +
                field.value.length + ' символов.';
        }

        if (validity.patternMismatch) {
            if (field.hasAttribute('title')) return field.getAttribute('title');
        };

        return 'Значение, которое вы ввели для этого поля, недействительно.';


    };

    let showError = function(field, error) {
        field.classList.remove('success');
        field.classList.add('error');

        let id = field.id || field.name;
        if (!id) return;

        let message = field.form.querySelector('.error-message#error-for-' + id);
        if (!message) {
            message = document.createElement('div');
            message.className = 'error-message';
            message.id = 'error-for-' + id;
            field.parentNode.insertBefore(message, field.nextSibling);
        }

        field.setAttribute('aria-describedby', 'error-for-' + id);

        message.innerHTML = error;


        message.style.display = 'flex';
        message.style.visibility = 'visible';
    };
    let removeError = function(field) {


        field.classList.remove('error');



        field.removeAttribute('aria-describedby');
        field.classList.add('success');

        let id = field.id || field.name;
        if (!id) return;

        let message = field.form.querySelector('.error-message#error-for-' + id + '');
        if (!message) return;

        message.innerHTML = '';
        message.style.display = 'none';
        message.style.visibility = 'hidden';


    };

    document.addEventListener('input', function(event) {
        let username = document.querySelector('.count-username');
        let email = document.querySelector('.count-email');
        let phone = document.querySelector('.count-phone');
        let count = event.target.value.length;
        if (event.target.name == "username") {
            username.innerText = count + " символов";
        }
        if (event.target.name == "email") {
            email.innerText = count + " символов";
        }
        if (event.target.name == "phone") {
            phone.innerText = count + " символов";
        }
    })
    document.addEventListener('blur', function(event) {
        if (!event.target.form.classList.contains('validate')) return
        let error = hasError(event.target);
        if (error) {
            showError(event.target, error);
            return;
        }

        removeError(event.target);
    }, true);
    document.addEventListener('submit', function(event) {
        if (!event.target.classList.contains('validate')) return;
        let fields = event.target.elements;
        let error, hasErrors;
        for (let i = 0; i < fields.length; i++) {
            error = hasError(fields[i]);
            if (error) {
                showError(fields[i], error);
                if (!hasErrors) {
                    hasErrors = fields[i];
                }
            }
        }
        if (hasErrors) {
            event.preventDefault();
            hasErrors.focus();
        } else {
            // let xhr = new XMLHttpRequest();

            // xhr.open("POST", "php/mail-callback.php", true);
            // let formData = new FormData(fields);

            // xhr.addEventListener("load", function() {
            //     if (xhr.readyState == 4) {
            //         switch (xhr.status) {
            //             case 200:
            //                 {
            //                     console.log("Все харашо");
            //                     form.reset();
            //                     break;
            //                 }
            //             case 301:
            //                 {
            //                     console.log("Нас перенаправили");
            //                     break;
            //                 }
            //             case 404:
            //                 {
            //                     console.log("Мы ничего не найшли");
            //                     break;
            //                 }
            //             default:
            //                 console.log("Ошибка!");
            //                 break;
            //         }
            //     }
            // })

            // xhr.send(formData);
            var xhr = new XMLHttpRequest(),

                body = 'username=' + encodeURIComponent(fields.username.value) +
                '&usermail=' + encodeURIComponent(fields.email.value) +
                '&subject=' + encodeURIComponent(fields.phone.value);
            xhr.open('POST', 'php/mail-callback.php', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.setRequestHeader('Cache-Control', 'no-cache');
            xhr.send(body);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    switch (xhr.status) {
                        case 200:
                            {
                                console.log("Все харашо");
                                forms.reset();
                                break;
                            }
                        case 301:
                            {
                                console.log("Нас перенаправили");
                                break;
                            }
                        case 404:
                            {
                                console.log("Мы ничего не найшли");
                                break;
                            }
                        default:
                            console.log("Ошибка!");
                            break;
                    }
                }
            }

        }

    }, false);


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
    if (document.querySelector('.form-admin')) {
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

                time: {
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

                time: {
                    required: "Поле должно быть заполнeно"
                },

                rating: {
                    required: "Поле должно быть заполнeно",
                },

            },
        });
    }



});

$(document).ready(function() {
    $('.burger-menu__button').click(function(event) {
        $('.burger-menu__button,.burger-menu__line, .burger-menu').toggleClass('active');
    })
})