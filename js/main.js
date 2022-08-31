let footerCurrentYearElement = document.getElementById("footer-current-year");

if (footerCurrentYearElement !== null) {
    let currentYear = new Date().getFullYear();
    footerCurrentYearElement.innerText = currentYear;
}
