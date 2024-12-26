document.addEventListener("DOMContentLoaded", () => {
    const answers = {
        question1: "2017",
        question2: "100",
        question3: "Erangel",
        question4: "Все вышеперечисленное",
        question5: "Аптечка",
        question6: "Kar98k",
        question7: "Solo"
    };

    const questionTitles = [
        "Вопрос 1",
        "Вопрос 2",
        "Вопрос 3",
        "Вопрос 4",
        "Вопрос 5",
        "Вопрос 6",
        "Вопрос 7"
    ];

    const quizForm = document.getElementById("quizForm");
    const checkButton = document.getElementById("checkButton");
    const restartButton = document.getElementById("restartButton");
    const scoreDisplay = document.getElementById("scoreDisplay");
    const detailedResults = document.getElementById("detailedResults");

    checkButton.addEventListener("click", () => {
        let score = 0;
        scoreDisplay.innerHTML = "";
        detailedResults.innerHTML = "";

        // Получаем все элементы feedback
        const feedbackElements = document.querySelectorAll('.feedback');

        // Скрываем все элементы feedback перед новой проверкой
        feedbackElements.forEach(feedback => {
            feedback.classList.add('hidden');
            feedback.innerHTML = ''; // Очищаем предыдущие результаты
        });

        const formData = new FormData(quizForm);

        Object.keys(answers).forEach((key, index) => {
            const userAnswer = formData.get(key)?.trim() || "";
            const feedbackElement = feedbackElements[index]; // Получаем соответствующий элемент feedback
            let correctAnswer = answers[key];

            if (userAnswer === correctAnswer) {
                score++;
                feedbackElement.innerHTML = `<span class="correct">Правильно! (Правильный ответ: ${correctAnswer})</span>`;
            } else {
                feedbackElement.innerHTML = `<span class="incorrect">Неправильно! (Правильный ответ: ${correctAnswer})</span>`;
            }
            
            // Показываем результат под вопросом
            feedbackElement.classList.remove('hidden');

            // Добавляем результаты в общий отчет с правильными заголовками
            detailedResults.innerHTML += `<p>${questionTitles[index]}: ${feedbackElement.innerHTML}</p>`;
        });

        scoreDisplay.innerHTML = `<p>Вы набрали <strong>${score}</strong> из <strong>${Object.keys(answers).length}</strong> баллов.</p>`;
        restartButton.classList.remove("hidden");
        checkButton.disabled = true; // Блокируем кнопку проверки
        const resultData = {
score: score,
total: Object.keys(answers).length,
detailedResults: detailedResults.innerHTML
};

// Сохраняем результаты в localStorage
localStorage.setItem('quizResults', JSON.stringify(resultData));

    });

    restartButton.addEventListener("click", () => {
        quizForm.reset();
        checkButton.disabled = false;
        restartButton.classList.add("hidden");
        scoreDisplay.innerHTML = "";
        detailedResults.innerHTML = "";
        
        // Скрываем все элементы feedback при перезапуске
        const feedbackElements = document.querySelectorAll('.feedback');
        feedbackElements.forEach(feedback => {
            feedback.classList.add('hidden');
            feedback.innerHTML = ''; // Очищаем предыдущие результаты
        });
    });
});