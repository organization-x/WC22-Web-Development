const express = require("express");
const app = express();

app.set("views", "./public")
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    res.render("index");
});



app.listen(3000);