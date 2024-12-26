document.addEventListener("DOMContentLoaded", () => {
    const scoreDisplay = document.getElementById("scoreDisplay");
    const detailedResults = document.getElementById("detailedResults");

    // Получаем результаты из localStorage
    const resultData = JSON.parse(localStorage.getItem('quizResults'));

    if (resultData) {
        scoreDisplay.innerHTML = `
            <p>Вы набрали <strong>${resultData.score}</strong> из <strong>${resultData.total}</strong> баллов.</p>
        `;
        detailedResults.innerHTML = `
            <h3>Детальные результаты:</h3>
            <div>${resultData.detailedResults}</div>
        `;
    } else {
        scoreDisplay.innerHTML = "<p>Результаты не найдены.</p>";
        detailedResults.innerHTML = ""; // Очищаем детальные результаты
    }
});





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