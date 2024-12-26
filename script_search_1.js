
// Получаем элементы
const searchInput = document.getElementById('vvod'); // Поле ввода для поиска
const buttonElements = document.querySelectorAll('.button'); // Все кнопки
const contentElements = document.querySelectorAll('.content'); // Все элементы содержимого
const noResultsMessage = document.getElementById('no-results'); // Элемент для сообщения "Ничего не найдено"

// Функция для выделения текста
function highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi'); // Регулярное выражение для поиска слова
    return text.replace(regex, '<span class="highlight">\$1</span>'); // Заменяем найденный текст на обернутый в <span>
}

// Функция для поиска
function search() {
    const query = searchInput.value.toLowerCase(); // Получаем текст для поиска, приводим его к нижнему регистру
    let found = false; // Флаг для проверки, найден ли результат

    buttonElements.forEach((button, index) => {
        const content = contentElements[index];
        const buttonText = button.textContent.toLowerCase(); // Текст кнопки, приведенный к нижнему регистру
        const contentText = content.textContent.toLowerCase(); // Текст содержимого, приведенный к нижнему регистру

        // Если текст кнопки или содержимого совпадает с запросом
        if (buttonText.includes(query) || contentText.includes(query)) {
            button.style.display = 'block'; // Показываем кнопку
            content.style.display = 'block'; // Показываем содержимое
            
            // Если пользователь ввел текст для поиска
            if (query !== '') {
                button.innerHTML = highlightText(button.textContent, query); // Выделяем текст в кнопке
                content.innerHTML = highlightText(content.innerHTML, query); // Выделяем текст в содержимом
            }
            
            found = true; // Устанавливаем флаг, что найдено совпадение
        } else {
            button.style.display = 'none'; // Скрываем кнопку
            content.style.display = 'none'; // Скрываем содержимое
        }
    });

    // Если не найдено совпадений и поле поиска не пустое
    if (!found && query !== '') {
        noResultsMessage.style.display = 'block'; // Показываем сообщение "Ничего не найдено"
    } else {
        noResultsMessage.style.display = 'none'; // Скрываем сообщение, если что-то найдено
    }
}

// Добавляем обработчик событий для поиска
searchInput.addEventListener('input', search); // Запускаем поиск при вводе текста
