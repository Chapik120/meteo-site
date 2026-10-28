function renderWidget() {
    const temperatures = [8, 10, 12, 15, 18];

    const descriptions = [
        "Облачно",
        "Ясно",
        "Переменная облачность",
        "Небольшой дождь",
        "Солнечно"
    ];

    const index = Math.floor(Math.random() * temperatures.length);

    document.getElementById("temperature").textContent =
        `+${temperatures[index]} °C`;

    document.getElementById("description").textContent =
        descriptions[index];
}