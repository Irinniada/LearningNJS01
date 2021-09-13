console.log("Hi!");

let currentDate = new Date();
module.exports.date = currentDate;

module.exports.getMessage = function (name) {
    let hour = currentDate.getHours();
    if (hour < 6) {
        return "Good night, " + name;
    }
    else if (hour >= 6 && hour < 12) {
        return "Good morning, " + name;
    }
    else if (hour >= 12 && hour < 18) {
        return "Good afternoon, " + name;
    }
    else if (hour >= 18) {
        return "Good evening, " + name;
    }
}