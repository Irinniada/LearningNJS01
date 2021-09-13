
const os = require("os");
const greeting = require("./greeting");
let userName = os.userInfo().username;

const User = require("./user.js");
let irina = new User("Irina", 32);
irina.sayHi();

const http = require("http");
http.createServer((request, response) => {

    response.write('<html>');
    response.write('<head><title>New Form</title><head>');
    response.write(`<body>`);
    response.write(`<div>Date: ${greeting.date}</div>`); //TODO: fix encoding
    response.write(`<div>${greeting.getMessage(userName)}</div>`);
    response.write(`</body>`);
    response.write('</html>');
    response.end();
}).listen(3000, "127.0.0.1", function () {
    console.log("Server starts listening in p 3000");
})

