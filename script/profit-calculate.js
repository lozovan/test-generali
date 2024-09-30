$(document).ready(function () {
    // Ініціалізація слайдера для місяців
    $("#slider1").ionRangeSlider({
        skin: "round",
        grid: true,
        values: ["1 month", "3 month", "6 month", "9 month", "12 month"],
        from: 0,
        onChange: function (data) {
            calculateProfit();  // Перерахунок прибутку
        }
    });

    // Ініціалізація слайдера для суми
    $("#slider2").ionRangeSlider({
        skin: "round",
        min: 300,
        max: 15000,
        from: 2000,
        step: 100,
        grid: true,
        postfix: " €",
        onChange: function () {
            calculateProfit();  // Перерахунок прибутку
        }
    });

    // Встановлення початкового прибутку
    document.getElementById('profit').innerText = "8600"; // Залишаємо 8600 при першому завантаженні
});

// Логіка обчислення потенційного прибутку
function calculateProfit() {
    const monthValues = [1, 3, 6, 9, 12];  // Відповідність індексів кількості місяців
    const slider1Value = monthValues[$("#slider1").data("ionRangeSlider").result.from]; // Отримуємо кількість місяців на основі індексу
    const slider2Value = $("#slider2").data("ionRangeSlider").result.from;     // Отримуємо суму в євро

    // Формула для розрахунку можливої прибутковості
    const profit = (slider1Value * slider2Value * 0.05).toFixed(2);  // Наприклад, множимо на 0.05

    document.getElementById('profit').innerText = profit;  // Виводимо результат у HTML
}
