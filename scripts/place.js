const currentYearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastModified");

const today = new Date();
currentYearElement.textContent = today.getFullYear();
lastModifiedElement.textContent = `Last Modification: ${document.lastModified}`;

function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
}

const temperature = 10; // °C
const windSpeed = 5;    // km/h

const windChillElement = document.getElementById("windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChillElement.textContent = "N/A";
}