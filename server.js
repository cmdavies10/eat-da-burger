var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
app.use(express.static("public"));

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Listening at localhost:" + PORT);
})