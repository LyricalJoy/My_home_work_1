document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const content = document.getElementById(targetId);

        // Переключаем видимость контента
        if (content.style.display === 'block') {
            content.style.display = 'none'; // Скрываем, если уже открыт
        } else {
            // Скрываем все контенты
            document.querySelectorAll('.content').forEach(el => {
                el.style.display = 'none';
            });
            // Показываем текущий контент с анимацией
            content.style.display = 'block';
        }
    });
});
