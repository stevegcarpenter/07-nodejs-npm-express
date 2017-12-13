'use strict';

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

// imports
const express = require('express');
const app = express();
// We point express to the public folder where all static files are located
// the public folder should only contain static project files
app.use(express.static('./public'));

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

//if the user types /new route they will be served up new.html 
app.get('/new', (req, res) => {
  res.status(200).sendfile('./public/new.html');
});

app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));