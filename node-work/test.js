var files = require("fs");
var https = require("https");

files.writeFile(__dirname + "/index.html", "<h1>test run</h1>");

var urlImage = "https://i.imgur.com/7i8nRN5.jpg";
var urlFile = files.createWriteStream(__dirname + "programComic.jpg");
var request = https.get(urlImage, function(response) {
  response.pipe(urlFile);
});
