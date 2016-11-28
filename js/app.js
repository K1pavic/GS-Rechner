/**
 * Created by kronos on 16.05.16.
 */

function calculate() {

    var year_m;
    var month_m;
    var monthRes1;
    var monthRes2;
    var dayRes1;
    var dayRes2;
    var dayResX;
    var result;
    var dayPay1;
    var dayPay2;

    var rabbat = 0;
    var extraGG = 0;
    extraGG = document.getElementById("extra").value;
    var gg = document.getElementById("gg").value;
    rabbat = document.getElementById("rabbat").value;
    var von = document.getElementById("von").value;
    var biss = document.getElementById("biss").value;

    // Create the Date() object for every year input
    var first_date = new Date(von);
    var second_date = new Date(biss);

    var year1 = first_date.getFullYear();
    var year2 = second_date.getFullYear();

    var month1 = first_date.getMonth() + 1;
    var month2 = second_date.getMonth() + 1;

    var dayInput1 = first_date.getDate();
    var dayInput2 = second_date.getDate();

    var leap1 = leapYear(year1, month1);
    var leap2 = leapYear(year2, month2);

    var daysInMonth1 = checkLeap(leap1, month1);
    var daysInMonth2 = checkLeap(leap2, month2);

    // Rabat
    gg = +extraGG + +gg; // Interesting JavaScript thing..
    var ggR = (gg - ((rabbat / 100) * gg));

    // Days to pay calculate
    if ((month1 == month2) && (year1 == year2)) {
        dayPay1 = 0;
        dayPay2 = 0;
        dayResX = dayInput2 - dayInput1 + 1;
        result = (ggR / daysInMonth1) * dayResX;

    } else {
        dayRes1 = -(dayInput1 - (daysInMonth1 + 1));
        console.log(dayRes1);
        dayRes2 = dayInput2;
        dayPay1 = (ggR / daysInMonth1) * dayRes1;
        dayPay2 = (ggR / daysInMonth2) * dayRes2;
    }

    // Years and months to pay
    var year = year2 - year1;

    if (year > 0) {
        monthRes1 = 12 - month1;
        monthRes2 = month2 - 1;
        month_m = monthRes1 + monthRes2;

        if (year == 1) {
            year_m = 0;
        } else {
            year = year - 1;
            year_m = year * 12;
        }

        result = ggR * (year_m + month_m);

    } else {
        if (month1 !== month2) {
            month_m = month2 - month1 - 1;
            result = ggR * (month_m);
        }
    }

    result = result + dayPay1 + dayPay2;

    if ((isNaN(result)) || (year1 > year2) || ((year1 == year2) && (month2 < month1)) || ((year1 == year2) && (month1 == month2) && (dayInput1 > dayInput2)) || (result < 0)) {
        result = "Try again!";
    } else {
        result = Math.round(result * 100) / 100;
        result = result + "€";
    }

    document.getElementById("resultat").innerHTML = result;

    result = 0;
    year_m = 0;
    month_m = 0;
    monthRes1 = 0;
    monthRes2 = 0;
    dayRes1 = 0;
    dayRes2 = 0;
    dayResX = 0;
    result = 0;
    dayPay1 = 0;
    dayPay2 = 0;
}

// Leap year calculation
function leapYear(yearToCheck, month) {
    return ((((yearToCheck % 4 == 0) && (yearToCheck % 100 != 0)) || (yearToCheck % 400 == 0)) && month == 2);
}

// Checks for leap day
function checkLeap(leap, month) {

    if (leap === true) {
        return 29;
    } else {
        return daysCalculate(month);
    }
}

// Calculate days in month
function daysCalculate(month) {

    if ((month == 1) || (month == 3) || (month == 5) || (month == 7) || (month == 8) || (month == 10) || (month == 12)) {
        return 31;
    } else if (month == 2) {
        return 28;
    } else {
        return 30;
    }
}

/********/

function kein() {

    document.getElementById("extra").value = 0;

}

function HW1() {

    document.getElementById("extra").value = 2;

}

function HW2() {

    document.getElementById("extra").value = 3;

}

function HW3() {

    document.getElementById("extra").value = 5;

}

function fsecure() {

    document.getElementById("extra").value = 3.95;

}