var express = require('express');  // Import Express
var app = express(); 
var bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
              // Create Express app

// Serve index.html for root path requests
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle POST request for submit-contact-data
app.post('/submit-contact-data', (req, res) => {
    var name=req.body.firstname + ' ' + req.body.lastname;
  res.send(name +'submitted succesfully');
});

// Handle PUT request for update-data
app.put('/update-data', (req, res) => {
  res.send('put req');
});

// Handle DELETE request for delete-data
app.delete('/delete-data', (req, res) => {
  res.send('delete req');  // Corrected typo from "dlte" to "delete"
});

// Start the server and listen on port 4000
const server = app.listen(4000, () => {
  console.log('Node is running on port 4000');
});
