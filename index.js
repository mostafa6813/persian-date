function PersianDate(date) {
    let myDate;
    if (date) {
        myDate = new Date(date);
    } else {
        myDate = new Date();
    }

    const str = myDate.toLocaleDateString("fa-IR");
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        switch (str[i].charCodeAt(0)) {
            case 1776:
                newStr += "0"
                break;
            case 1777:
                newStr += "1"
                break;
            case 1778:
                newStr += "2"
                break;
            case 1779:
                newStr += "3"
                break;
            case 1780:
                newStr += "4"
                break;
            case 1781:
                newStr += "5"
                break;
            case 1782:
                newStr += "6"
                break;
            case 1783:
                newStr += "7"
                break;
            case 1784:
                newStr += "8"
                break;
            case 1785:
                newStr += "9"
                break;
            case 47:
                newStr += "/"
                break;
            default:
        }
    }

    return newStr.split("/");
}

let [year, month, date] = PersianDate("27 jun 1989");
// or for current date use below statement
// let [year, month, date] = PersianDate();

console.log('year: ', year);
console.log('month: ', month);
console.log('day: ', date);