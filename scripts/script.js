function calculateWindChill(temp, windSpeed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
}

window.onload = function () {
    const temp = 5; // Temperatura em °C
    const windSpeed = 13;



    const windChill = (temp <= 10 && windSpeed > 4.8) ? calculateWindChill(temp, windSpeed) + " °C" : "N/A";

    document.getElementById("windChill").textContent = windChill;
};




const currentYear = new Date().getFullYear();
document.addEventListener('DOMContentLoaded', function() {

    // Output the last modified date
    const lastModifiedParagraph = document.querySelector('footer p:nth-child(2)');
    lastModifiedParagraph.textContent = `Last modified: ${document.lastModified} © ${currentYear}`;
});