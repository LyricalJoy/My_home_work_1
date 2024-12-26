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

    const quizForm = document.getElementById("quizForm");
    const checkButton = document.getElementById("checkButton");
    const restartButton = document.getElementById("restartButton");
    const scoreDisplay = document.getElementById("scoreDisplay");
    const detailedResults = document.getElementById("detailedResults");

    checkButton.addEventListener("click", () => {
        let score = 0;
        detailedResults.innerHTML = "";
        const formData = new FormData(quizForm);
        const detailedResultsData = []; // Для сохранения детализированных результатов

        Object.keys(answers).forEach((key, index) => {
            const userAnswer = formData.get(key)?.trim() || "";
            const questionNumber = index + 1;
            const resultItem = document.createElement("div");

            let correct = false; // Флаг для правильного ответа
            let correctAnswer = answers[key]; // Правильный ответ для сохранения

            if (userAnswer === answers[key]) {
                score++;
                correct = true;
                resultItem.innerHTML = `<p>Вопрос ${questionNumber}: <span class="correct">Правильно</span> (Правильный ответ: ${correctAnswer})</p>`;
            } else {
                resultItem.innerHTML = `<p>Вопрос ${questionNumber}: <span class="incorrect">Неправильно</span> (Правильный ответ: ${correctAnswer})</p>`;
            }

            // Сохраняем данные для детализированных результатов
            detailedResultsData.push({ question: questionNumber, correct, userAnswer, correctAnswer });

            detailedResults.appendChild(resultItem);
        });

        scoreDisplay.innerHTML = `<p>Вы набрали <strong>${score}</strong> из <strong>${Object.keys(answers).length}</strong> баллов.</p>`;
        checkButton.disabled = true;
        restartButton.classList.remove("hidden");

        // Сохранение в localStorage
        localStorage.setItem("score", score);
        localStorage.setItem("detailedResults", JSON.stringify(detailedResultsData));
    });

    restartButton.addEventListener("click", () => {
        quizForm.reset();
        checkButton.disabled = false;
        restartButton.classList.add("hidden");
        scoreDisplay.innerHTML = "";
        detailedResults.innerHTML = "";
        localStorage.clear(); // Очистка результатов (опционально)
    });
});