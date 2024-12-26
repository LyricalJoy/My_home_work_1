// Чтение данных из localStorage
const score = localStorage.getItem('score'); // Получаем баллы
const detailedResultsData = JSON.parse(localStorage.getItem('detailedResults')); // Получаем детализированные результаты

// Проверяем, есть ли данные
if (score !== null && detailedResultsData !== null) {
    // Отображаем общий результат
    document.getElementById("scoreDisplay").innerHTML = `<h3>Ваши баллы:</h3> ${score} / 7 баллов`;

    // Создаем HTML для детализированных результатов
    let detailedResultsHTML = "<h3>Детализированные результаты:</h3>";
    detailedResultsData.forEach(item => {
        if (item.correct) {
            detailedResultsHTML += `<p>Вопрос ${item.question}: <span class="correct">Правильно (Правильный ответ: ${item.correctAnswer})</span></p>`;
        } else if (item.correctAnswer) {
            detailedResultsHTML += `<p>Вопрос ${item.question}: <span class="incorrect">Неправильно</span> (Правильный ответ: ${item.correctAnswer})</p>`;
        } else {
            detailedResultsHTML += `<p>Вопрос ${item.question}: <span class="incorrect">Не отвечено</span></p>`;
        }
    });

    // Вставляем результаты в блок detailedResults
    document.getElementById("detailedResults").innerHTML = detailedResultsHTML;
} else {
    // Если данных нет, выводим сообщение об ошибке
    document.getElementById("scoreDisplay").innerHTML = "<h3>Данные отсутствуют. Пройдите тест заново.</h3>";
}







document.addEventListener("DOMContentLoaded", () => {
    // Получаем данные из sessionStorage
    const name = sessionStorage.getItem("username");
    const dob = sessionStorage.getItem("dob");
    const gender = sessionStorage.getItem("gender");

    // Вычисляем возраст
    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();
        return today.getFullYear() - birthDate.getFullYear() - (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate()) ? 1 : 0);
    };

    const age = calculateAge(dob);

    // Отображаем информацию о пользователе
    const userInfoDiv = document.getElementById("userInfo");
    userInfoDiv.innerHTML = `
        <p><strong>Логин:</strong> ${name}</p>
        <p><strong>Возраст:</strong> ${age}</p>
        <p><strong>Пол:</strong> ${gender}</p>
    `;

});