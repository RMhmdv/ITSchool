jQuery(document).ready(function ($) {
    let formModal = $('.cd-user-modal'),
        formLogin = formModal.find('#cd-login'),
        formSignup = formModal.find('#cd-signup'),
        formForgotPassword = formModal.find('#cd-reset-password'),
        formModalTab = $('.cd-switcher'),
        tabLogin = formModalTab.children('li').eq(0).children('a'),
        tabSignup = formModalTab.children('li').eq(1).children('a'),
        mainNav = $('.main-nav');

    mainNav.on('click', function (event) {
        $(event.target).is(mainNav) && mainNav.children('ul').toggleClass('is-visible');
    });
    mainNav.on('click', '.cd-signin', login_selected);
    mainNav.on('click', '.cd-signup', signup_selected);

    formModal.on('click', function (event) {
        if ($(event.target).is(formModal) || $(event.target).is('.cd-close-form')) {
            formModal.removeClass('is-visible');
        }
    });
    $(document).keyup(function (event) {
        if (event.which == '27') {
            formModal.removeClass('is-visible');
        }
    });
    formModalTab.on('click', function (event) {
        event.preventDefault();
        ($(event.target).is(tabLogin)) ? login_selected() : signup_selected();
    });
    $('.hide-password').on('click', function () {
        var togglePass = $(this),
            passwordField = togglePass.prev('input');

        ('password' == passwordField.attr('type')) ? passwordField.attr('type', 'text') : passwordField.attr('type', 'password');
        passwordField.putCursorAtEnd();
    });

    function login_selected() {
        mainNav.children('ul').removeClass('is-visible');
        formModal.addClass('is-visible');
        formLogin.addClass('is-selected');
        formSignup.removeClass('is-selected');
        formForgotPassword.removeClass('is-selected');
        tabLogin.addClass('selected');
        tabSignup.removeClass('selected');
    }
    function signup_selected() {
        mainNav.children('ul').removeClass('is-visible');
        formModal.addClass('is-visible');
        formLogin.removeClass('is-selected');
        formSignup.addClass('is-selected');
        formForgotPassword.removeClass('is-selected');
        tabLogin.removeClass('selected');
        tabSignup.addClass('selected');
    }

});
new JustValidate('.cd-form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
        },
        login: {
            required: true,
        },
        email: {
            required: true,
            email: true,
        },
        password: {
            required: true,
            minLength: 6,
        },
    },
    messages: {
        name: {
            minLength: 'Введите больше 1-го символа',
            required: 'Введите Ваше имя',
        },
        login: {
            required: 'Введите Ваш логин',
        },
        email: {
            email: 'У почты неправильный формат',
            required: 'Укажите Вашу почту ',
        },
        password: {
            required: 'Придумайте пароль',
            minLength: 'Нужно ввести минимум 6 символов',
        },
    },
    submitHandler: function (form) {
        let xhr = new XMLHttpRequest();

        xhr.open("POST", "../mail.php", true);

        let formData = new FormData(form);

        xhr.addEventListener("load", function () {
            if (xhr.readyState === 4) {
                switch (xhr.status) {
                    case 200:
                        showNewModal();
                        break;
                    case 404:
                        console.log("You are looser!");
                        break;
                    default:
                        console.log(":(");
                        break;
                }
            }
        });
        xhr.send(formData);
    },
});

jQuery.fn.putCursorAtEnd = function () {
    return this.each(function () {
        if (this.setSelectionRange) {
            let len = $(this).val().length * 2;
            this.focus();
            this.setSelectionRange(len, len);
        } else {
            $(this).val($(this).val());
        }
    });
};