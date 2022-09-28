const express = require('express');
var path = require('path');
// Import Config
const cfg = require('./config.json')
//initialize express app
const app = express();
app.use(express.static('public'));
app.use('/assets', express.static(path.join(__dirname, 'src/public/assets')))
app.set('views', './src/views');
app.set('view engine', 'ejs');
// run the routing file
require("./src/routing.js")(app, cfg)
app.listen(cfg.port)
console.log('MVP Started - Port: ' + cfg.port);
// Rejection Handler
process.on('unhandledRejection', (err) => {
    console.log(err);
});

app.post("/backend/form/submit", async function (req, res) {
    let name = req.body.name
    let msg = req.body.name
    console.log(name)
    console.log(msg)
    res.redirect('/')
})
