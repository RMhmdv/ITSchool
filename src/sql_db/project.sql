-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Фев 26 2021 г., 13:16
-- Версия сервера: 10.4.12-MariaDB
-- Версия PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `project`
--

-- --------------------------------------------------------

--
-- Структура таблицы `cards`
--

CREATE TABLE `cards` (
  `id` int(10) NOT NULL,
  `title` text NOT NULL,
  `about` varchar(1000) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `cards`
--

INSERT INTO `cards` (`id`, `title`, `about`, `img`) VALUES
(1, 'Время', 'На рынке с 2010 года\r\n', 'images/icon1.svg'),
(2, 'Количество', 'База насчитывает около 2000 разных курсов', 'images/icon2.svg'),
(3, 'Митапы', 'Ежегодные митапы, встречи и конференции', 'images/icon3.svg'),
(4, 'Студенты', '6000+ студентов, которые получили дополнительный навык', 'images/icon4.svg');

-- --------------------------------------------------------

--
-- Структура таблицы `courses`
--

CREATE TABLE `courses` (
  `id` int(10) NOT NULL,
  `title` text NOT NULL,
  `author` text NOT NULL,
  `time` varchar(255) NOT NULL,
  `rating` float NOT NULL,
  `about` text NOT NULL,
  `img` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `courses`
--

INSERT INTO `courses` (`id`, `title`, `author`, `time`, `rating`, `about`, `img`, `created_at`, `updated_at`) VALUES
(16, 'Figma с нуля', 'Christopher Morgan', '6ч 35мин', 4.9, 'Кому стоит изучить Figma\r\nРебятам, чьи глаза горят от веб-дизайна, ui-дизайна, проектирования интерфейсов и ux-дизайна. Для тех, кто стремиться расти как:\r\n\r\nВеб-дизайнер – создает в Figma сайты: блоги, лендинги, промо, интернет-магазины;\r\nUI-дизайнер – занимается визуальной частью интерфейса (стилями, эстетикой, масштабирование под платформы), работает в паре с UX-дизайнером и Бренд-дизайнером;\r\nUX-дизайнер/Проектировщик интерфейсов – развивает продукт как систему, делает так, чтобы пользователи быстрее решали задачи в продукте;\r\nВ чем сила Figma: какие проекты можно создавать в Фигме\r\nФигму применяют для веб-дизайна, дизайна мобильных приложений, приложений для умных часов, дизайна и проектирования и создания прототипов интерфейсов.\r\n\r\nСреди клиентов Figma команды развивающие популярные сайты и приложения : Slack, Dropbox, Twitter, Microsoft, Dribbble, Github, и многие другие известные бренды.', 'images/icon/figma.svg', '2021-02-17 17:19:36', '2021-02-17 17:50:19'),
(17, 'Основы фотографии', ' Gordon Norman', '3ч 15мин', 4.7, 'ПРОГРАММА КУРСА   \r\n\r\nУрок 1. Введение в фотографию.\r\nФотография как искусство.\r\nФотоаппараты. Классификация камер по размеру кадра. \r\nПонятие кроп-фактор\r\nПонятие светочувствительности (ISO).\r\nФорматы записи цифровых файлов.\r\nПонятие цветовой температуры. Баланс белого.\r\nКак правильно фокусировать камеру на объект съемки.\r\nУрок 2. Выдержка и диафрагма.\r\nЧто такое выдержка.\r\n«Смазывание» и «замораживание» объекта съёмки.\r\nСъемка в приоритете выдержки.\r\nДиафрагма и на что она влияет.\r\nРазмытие и прорисовка заднего плана, понятие «боке».\r\nСъемка в приоритете диафрагмы.\r\nУстановка на камере необходимых настроек. Правила наведения на резкость.\r\nУрок 3. Определение экспозиции.\r\nЧто такое экспозиция.\r\nПонятие ступени экспозиции.\r\nСтандартные ряды экспозиционных значений.\r\nСоотношение выдержки и диафрагмы.\r\nПонятие экспопары.\r\nСъемка в режиме «Р».\r\nЭкспокоррекция.\r\nУрок 4. Работа с объективами.\r\nТест по урокам «Выдержка, Диафрагма, Экспозиция»\r\nКлассификация объективов и их виды.\r\nФокусное расстояние объектива.\r\nСветосила объектива.\r\nПонятие глубины резкости (ГРИП).\r\n\r\nУрок 5. Основы композиции.\r\nТест по уроку Оптика\r\nГармония, контраст.\r\n«Золотое сечение». Правило третей.\r\nТочки напряжения.\r\nРавновесие.\r\nВизуальная динамика: свойства линий, линии силы.\r\nАнализ композиционного построения кадра на примерах работ.\r\nУрок 6. Особенности съемки при естественном освещении.\r\nУ природы нет плохой погоды.\r\nОбъективы и фокусное расстояние.\r\nСпособы измерения экспозиции.\r\nИспользование светофильтров. Смотри видео «Об уникальном свойстве поляризационного фильтра за 1 мин.»\r\nШтативы, моноподы.\r\nИспользование различных фокусных расстояний.\r\nВыбор ракурса и съемка с учетом композиционных правил.\r\nУрок 7. Обработка фотографий возвращает негативу душу. \r\nДевять технических ошибок фотографии\r\nНасколько светлой должна быть фотография? Экспозиция.\r\nОсторожно контраст! Как насыщенность может испортить портрет.\r\nПаразитные оттенки портят кожу. \r\nЧеткость и сочность на портрете, в пейзаже.\r\nКривая контраста для лица\r\nHSL: как сделать кожу светлой, зубы белыми, траву темно-изумрудной? \r\nСпецэффекты онлайн RAW редактора photoeditor.polarr.co – снег, блики солнца\r\nУрок 8. Основы работы со светом при съемке портрета.\r\nВлияние света на художественную фотографию.\r\nЕстественный и искусственный свет.\r\nИсточники постоянного и импульсного света.\r\nХарактер освещения – мягкий и жесткий свет.\r\nСтудийное оборудование (зонты, софтбоксы, отражатели и пр.)\r\nПонятие рисующего и заполняющего источника света.\r\nТест по вопросам курса. Портфолио ревью работ выпускников курса в жанрах портрет, пейзаж, репортаж', 'images/icon/circle.svg', '2021-02-17 17:19:36', '2021-02-17 17:21:16'),
(18, 'Мастер Instagram', 'Sophie Gill', '7ч 40мин', 4.6, 'Кому будет интересен курс?\r\nКаждый, кто мечтает освоить профессию SMM специалиста с нуля, а также для тех, кто:\r\n\r\nДля желающих продвигать не инстаграм, а бизнес\r\nДля тех, кто в душе интернет-маркетолог\r\nДля тех, кто хочет попасть на высокооплачиваемую работу с постоянным карьерным ростом\r\nПрограмма курса SMM в школе A-Level рассчитана на тех, кто еще не сделал ни одного поста в Instagram, но твердо настроен формировать позитивный имидж своего бренда в социальных сетях.\r\n\r\nПрограмма курса\r\nВсего за 16 занятий вы получите нужные знания и навыки работы со всеми основными инструментами SMM менеджера. У вас будет достаточно насыщенных теорией лекций и практических занятий для закрепления навыков. Каждый студент получает тему для дипломной работы, которую нужно представить в конце обучения. Вы узнаете:\r\n\r\n01\r\nВведение в SMM. Работа с проектом. Стратегии\r\n+\r\n\r\n02\r\nРабота с целевой аудиторией и контентом\r\n+\r\n03\r\nКопирайтинг в SMM\r\n+\r\n04\r\nStories и IGTV\r\n+\r\n\r\n05\r\nАккаунт менеджмент\r\n+\r\n06\r\nВидео продакшн в SMM продвижении\r\n+\r\n\r\n07\r\nАктивация целевой аудитории. Работа со статистикой\r\n+\r\n\r\n08\r\nТаргетированная реклама\r\n', 'images/icon/insta.svg', '2021-02-17 17:23:12', '2021-02-17 17:23:12'),
(19, 'Курсы рисования', 'Jean Tate', '11ч 30мин', 4.8, 'Курс \"Открой в себе художника\"\r\n1. Скетч / sketch - эскиз, набросок\r\n-Основы скетчинга\r\n-Иллюстрации еды / Food sketch\r\n-Ботанический  скетч / Botanical sketch\r\n-Впечатления о путешествии / Travel sketching\r\n-Модные рисунки / Fashion sketching\r\n-Интерьерный скетчинг /Interior sketching\r\n-Промышленный скетчинг / Industrial sketching\r\n\r\n2. Живопись\r\n-Акварельная техника\r\n-Рисунок гуашью\r\n-Акриловыми красками\r\n-Масляными красками\r\n\r\n3.Графика\r\n-Академический рисунок графитовым карандашом\r\n-Графика цветными карандашами\r\n-Графика уголь, пастель, сангина, тушь, гель\r\n-Графика в японском стиле\r\n-Эстамп: монотипия, линогравюра и проч', 'images/icon/pensil.svg', '2021-02-17 17:25:31', '2021-02-17 17:25:31'),
(20, 'Основы Photoshop', 'David Green', '5ч 35мин', 4.7, 'Описание курса\r\nКурс дает базовые навыки работы в самом популярном графическом редакторе растровой графики, применяющемся во всех отраслях дизайна, компьютерного моделирования, проектирования и пр.\r\n\r\nПоследовательное и глубокое изучение возможностей программы по принципу «от простого к сложному» позволит вам освоить способы построения изображений, коррекции цвета фотографий, ретуши, создания коллажей, а также решения творческих задач, таких как рисование, коллажирование и художественная обработка фотографий.\r\n\r\nКурс по основам Фотошоп дает исчерпывающие знания всех без исключения базовых инструментов программы, что позволит вам легко приступить к изучению сложных методик, применяемых в вашей деятельности, будь то профессиональная работа с фотографиями, дизайн, 3D-моделирование, видеомонтаж или веб.', 'images/icon/photshop.svg', '2021-02-17 17:25:31', '2021-02-18 16:25:46');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `login` text NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `type` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `name`, `email`, `password`, `type`) VALUES
(1, 'admin', 'admin', 'ren.kol.t@gmail.com', 'admin', 'admin'),
(2, 'user', 'user', 'user@g.com', 'user', 'user'),
(3, 'arina', 'Arina', 'ar@g.com', 'arina', 'user'),
(4, 'test', 'Test', 'test@gmail.com', 'test', 'user'),
(7, 'irene', 'Irene', 'lala@g.com', '123', 'user');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `cards`
--
ALTER TABLE `cards`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
