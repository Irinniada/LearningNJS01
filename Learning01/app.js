
const os = require("os");
const greeting = require("./greeting");
let userName = os.userInfo().username;

const User = require("./user.js");
let irina = new User("Irina", 32);
irina.sayHi();

const http = require("http");
http.createServer(function (request, response) {

    response.end(`Date: ${greeting.date}` + "\n" + greeting.getMessage(userName));
}).listen(3000, "127.0.0.1", function () {
    console.log("Server starts listening in p 3000");
})


