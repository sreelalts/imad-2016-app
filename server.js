var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/about', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'about.html')); 
});

app.get('/apps', function (req, res) {
   res.send("Thank you for seeking data about us.. But We are sorry. this webpage can't be loaded because this web page not uploaded yet.."); 
});

app.get('/error', function (req, res) {
   res.send("Thank you for seeking data about us.. But We are sorry. this webpage can't be loaded because this web page not uploaded yet.."); 
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
