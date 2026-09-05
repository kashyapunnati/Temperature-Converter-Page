function convertTemperature() {
    let temperature = parseFloat(document.getElementById("temperature").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let result = document.getElementById("result");

    if (isNaN(temperature)) {
        result.innerHTML = "Please enter a valid temperature.";
        return;
    }

    if (fromUnit === "kelvin" && temperature < 0) {
        result.innerHTML = "Kelvin cannot be below 0.";
        return;
    }

    let celsius;

    if (fromUnit === "celsius") {
        celsius = temperature;
    } else if (fromUnit === "fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    } else if (fromUnit === "kelvin") {
        celsius = temperature - 273.15;
    }

    let converted;

    if (toUnit === "celsius") {
        converted = celsius;
    } else if (toUnit === "fahrenheit") {
        converted = (celsius * 9 / 5) + 32;
    } else if (toUnit === "kelvin") {
        converted = celsius + 273.15;
    }

    result.innerHTML = "Result: " + converted.toFixed(2) + " " + toUnit;
}