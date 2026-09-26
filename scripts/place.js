const currentYearSpan = document.querySelector("#currentyear");
const lastModifiedParagraph = document.querySelector("#lastModified");

const today = new Date();
currentYearSpan.textContent = today.getFullYear();

lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;

function calculateWindChill(temperature, windSpeed) {
    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
}

const temp = 10;
const wind = 5;
const windchillSpan = document.querySelector("#windchill");

if (temp <= 10 && wind > 4.8) {
    windchillSpan.textContent = `${calculateWindChill(temp, wind)} °C`;
} else {
    windchillSpan.textContent = "N/A";
}