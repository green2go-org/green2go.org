let moneyElement = document.getElementById("dollars-saved");

if (moneyElement !== null) {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    let totalDaysInYear = ((now.getYear() % 4 === 0 && now.getYear() % 100 > 0) || now.getYear() % 400 == 0) ? 366 : 365;
    let dollarsSaved = Math.round((9000 / totalDaysInYear * day) * 100) / 100;
    moneyElement.innerText = dollarsSaved;
}
