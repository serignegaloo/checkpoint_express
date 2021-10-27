const { request, response } = require('express');
var express = require('express');
var app = express();

app.use(express.static("public"))
app.set('view engine', 'ejs');

const currentDate = new Date();
const hours = currentDate.getHours();

app.use((request, response, next) => {
    switch (new Date().getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
          day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
    if (hours<=17 && hours>=9 && day==='Monday'||'Tuesday'||'Wednesday'||'Thursday'||'Sunday' ) {
        next();
    } else {
        response.render("errors")
    }
})


app.get('/', (request, response) => {
    response.render('home')
})

app.get('/home', (request, response) => {
    response.render('home')
})

app.get('/contacts', (request, response) => {
    response.render('contacts')
})

app.get('/services', (request, response) => {
    response.render('services')
})

app.listen(8000);