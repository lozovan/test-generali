$(document).ready(function () {
    $("#slider1").ionRangeSlider({
        skin: "round",
        grid: true,
        values: ["1 month", "3 month", "6 month", "9 month", "12 month"],
        from: 0,
        onChange: function (data) {
            calculateProfit();
        }
    });

    $("#slider2").ionRangeSlider({
        skin: "round",
        min: 300,
        max: 15000,
        from: 2000,
        step: 100,
        grid: true,
        postfix: " €",
        onChange: function () {
            calculateProfit();
        }
    });

    document.getElementById('profit').innerText = "8600";
});

function calculateProfit() {
    const monthValues = [1, 3, 6, 9, 12];
    const slider1Value = monthValues[$("#slider1").data("ionRangeSlider").result.from];
    const slider2Value = $("#slider2").data("ionRangeSlider").result.from;

    const profit = (slider1Value * slider2Value * 0.05).toFixed(2);

    document.getElementById('profit').innerText = profit;
}
