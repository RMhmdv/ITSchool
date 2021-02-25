<?php
	// Переменная в PHP это $имя_переменной
	// filter_var($_POST["атрибут name тэга input"], FILTER_SANITIZE_STRING)
	$name      = filter_var($_POST["username"], FILTER_SANITIZE_STRING);
	$email     = filter_var($_POST["email"], FILTER_SANITIZE_STRING);
	$phone 	   = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
	$errors;

	//В PHP добавить лишь проверку на пустоту
	if (empty($name)) {
			$errors = "Введите имя";
	}
	if (empty($email)) {
			$errors = "Введите email";
	}
	if (empty($phone)) {
			$errors = "Введите номер телефона";
	}
	
	// Чтобы добавить несколько полей в PHP нужно использовать .=
	// Пример ниже
	

	$to = "mega.ishop@ukr.net";
	$mailBody = "JS. ДЗ номер 4\n";
	$mailBody .= "Поле имя: " . $name . "\n";
	$mailBody .= "Поле почта: " . $email . "\n";
	$mailBody .= "Поле телефон: " . $phone . "\n";
	// и так столько, сколько нужно

	// Это отправка. Это не трогаем
	if (mail($to, 'Форма обратной связи', $mailBody)) {
			$output = "send";
			die($output);
			
	} else {
			$output = $errors;
			die($output);
	}
?>