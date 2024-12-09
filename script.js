// Функция для закрытия модального окна
function handleSubmit(event) {
    event.preventDefault(); // Отменяем отправку формы по умолчанию

    // Получаем значения полей ввода
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Сброс ошибок
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    let valid = true;

    // Проверка логина
    if (!username) {
        document.getElementById('usernameError').textContent = 'Необходимо заполнить логин.';
        valid = false;
    }

    // Проверка пароля
    if (!password) {
        document.getElementById('passwordError').textContent = 'Необходимо заполнить пароль.';
        valid = false;
    }

    // Если форма не валидна, не отправляем
    if (!valid) {
        return false;
    }

    // Если все поля заполнены, закрываем модальное окно
    alert("Форма отправлена!"); // Сообщение для демонстрации
    document.getElementById('modal').style.display = 'none'; // Закрытие модального окна
    return false; // Отменяем отправку формы для демонстрации
}

        // Открытие модального окна при загрузке страницы
        window.onload = function() {
            document.getElementById('modal').style.display = 'flex';
        };