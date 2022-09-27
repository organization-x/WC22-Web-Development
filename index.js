const express = require('express');
const moment = require('moment');

const app = express();

let timevar = moment().format();
console.log(timevar);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server is succesfully running  on port ' + PORT + ' :)'));


// Port for process to run on
app.set('views', './views');
app.set('view engine', 'ejs');

// using assets for css, images, etc
app.use(express.static('public'));
app.use('/assets', express.static(__dirname + 'public/assets/'))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
	let hello = "Hello World (I'm A Variable)"
  res.render("index.ejs", { helloWorld: hello });

  //res.render("index.ejs", { time: moment().format('MMMM Do YYYY, h:mm:ss a')});

});

 `use strict`
// var datetime = moment().format();
//console.log(datetime);
//incubatormvp.getElementById("time").textContent = datetime; //it will print on html page







//document.getElementById('time').innerHTML = timevar;

/* let timeAndDate = moment().format('MMMM Do YYYY, h:mm:ss a');
  res.render("index.ejs", { timeND: timeAndDate }); */