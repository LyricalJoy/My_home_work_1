document.addEventListener("DOMContentLoaded", function() {
    checkAuthentication(); // Проверяем авторизацию при загрузке страницы

    // Функция для проверки авторизации
    function checkAuthentication() {
        const isAuthenticated = sessionStorage.getItem('isAuthenticated');

        // Если пользователь не авторизован, перенаправляем на страницу логина
        if (isAuthenticated !== 'true') {
            window.location = 'login.html';
        } else {
            displayUsername(); // Если авторизован, отображаем имя пользователя
        }
    }

    // Функция для отображения имени пользователя
    function displayUsername() {
        const usernameDiv = document.getElementById('username');
        const username = sessionStorage.getItem('username');

        if (username) {
            usernameDiv.textContent = `Привет, ${username}`; // Отображаем приветствие с именем пользователя
            document.getElementById('logoutButton').style.display = 'block'; // Показываем кнопку "Выход"
        } else {
            usernameDiv.textContent = 'Вы не авторизованы'; // Сообщение о неавторизованном пользователе
        }
    }

    // Обработчик для кнопки "Выход"
    document.getElementById('logoutButton').addEventListener('click', function() {
        sessionStorage.removeItem('isAuthenticated'); // Удаляем флаг аутентификации
        sessionStorage.removeItem('username'); // Удаляем имя пользователя
        window.location = 'login.html'; // Переход на страницу авторизации
    });
});