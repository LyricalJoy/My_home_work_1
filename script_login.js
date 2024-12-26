
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener("submit", checkForm);
    }

    function checkForm(event) {
        event.preventDefault(); // Предотвращаем отправку формы
        var el = document.getElementById('loginForm');

        var name = el.name.value; 
        var dob = el.dob.value; 
        var gender = el.gender.value; // Получаем значение пола



        var nameError = document.getElementById('nameError');
        var dobError = document.getElementById('dobError');
        var generalError = document.getElementById('generalError');

        // Сбрасываем предыдущие ошибки
        nameError.textContent = "";
        dobError.textContent = "";
        generalError.textContent = "";

        var fail = false; // Переменная для отслеживания ошибок

        // Проверка на пустые поля
        if (name == "" ) {
            nameError.textContent = "Заполните все поля";
            fail = true; // Устанавливаем флаг ошибки ( dob == "")
        } else if ( dob == "") {
            dobError.textContent = "Заполните все поля";
            fail = true;
        } else if (name.length <= 3 || name.length > 10) {
            nameError.textContent = "Введите корректное имя (от 4 до 10 символов)";
            fail = true; // Устанавливаем флаг ошибки
        } else if (!/^(?=.*[А-Яа-яёЁ])[А-Яа-яёЁ0-9]+$/.test(name))  { // Проверка на кириллицу и цифры
            nameError.textContent = "Логин может содержать только русские буквы и цифры";
            fail = true; // Устанавливаем флаг ошибки
        } else if (!isValidDate(dob)) { // Проверка на корректность даты
            dobError.textContent = "Некорректная дата рождения. Дата должна быть не раньше 01.01.1950 и не позже вчерашнего дня.";
            fail = true; // Устанавливаем флаг ошибки
        }

        // Если есть ошибки, выводим их и не переходим на другую страницу
        if (fail) {
            return; // Выходим из функции, если есть ошибки
        } else {
            sessionStorage.setItem('isAuthenticated', 'true'); // Устанавливаем флаг аутентификации
            sessionStorage.setItem('username', name); // Сохраняем имя пользователя
            sessionStorage.setItem('gender', gender); // Сохраняем пол
            sessionStorage.setItem('dob', dob); // Сохраняем возраст
            window.location = 'index.html'; // Переход на другую страницу
        }
    }
    
    function displayUsername() {
        const usernameDiv = document.getElementById('username');
        const username = sessionStorage.getItem('username');
        const isAuthenticated = sessionStorage.getItem('isAuthenticated');

        if (isAuthenticated === 'true' && username) {
            usernameDiv.textContent = `Привет, ${username}`;
            document.getElementById('logoutButton').style.display = 'block'; // Показываем кнопку "Выход"
        } else {
            // Убираем строку с сообщением о неавторизованном пользователе
            usernameDiv.textContent = ''; // Очищаем содержимое, если не авторизован
        }
    }

    function logout() {
        sessionStorage.removeItem('isAuthenticated');
        sessionStorage.removeItem('username');
        window.location = 'login.html'; // Возврат на страницу авторизации
    }

    // Упрощенная функция для проверки корректности даты
    function isValidDate(dateString) {
        const date = new Date(dateString);
        const minDate = new Date('1950-01-01'); // Минимальная дата
        const today = new Date();
        today.setDate(today.getDate() - 1); // Вчерашний день

        // Проверка, что дата корректна и находится в заданных пределах
        return date >= minDate && date <= today && !isNaN(date);
    }

