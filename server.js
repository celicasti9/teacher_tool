/*This starts the logic for the login page */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the login form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

// Handle login form submission
app.post('/login', (req, res) => {
  const emailOrPhone = req.body.emailOrPhone;
  const password = req.body.password;

  // Perform validation and authentication logic here
  // Example:
  if (emailOrPhone === 'example@example.com' && password === 'password') {
    res.send('Login successful!');
  } else {
    res.send('Invalid credentials. Please try again.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

/*This Ends the logic for the login page */




/*This starts the logic for the donations page */

const express = require('express');
const app = express();
const port = 3000; // Replace with the desired port number

app.get('/cashapp', function(req, res) {
  // Handle the Cash App donation logic here
  // This can include connecting with the Cash App API or redirecting the user to the Cash App payment page

  // Return a response to indicate success or failure
  res.sendStatus(200); // Change the status code as needed
});

app.get('/paypal', function(req, res) {
  // Handle the PayPal donation logic here
  // This can include connecting with the PayPal API or redirecting the user to the PayPal payment page

  // Return a response to indicate success or failure
  res.sendStatus(200); // Change the status code as needed
});

app.get('/crypto', function(req, res) {
  // Handle the crypto donation logic here
  // This can include generating a crypto payment address or connecting with a crypto payment gateway

  // Return a response to indicate success or failure
  res.sendStatus(200); // Change the status code as needed
});

app.listen(port, function() {
  console.log(`Server is running on http://localhost:${port}`);
});

/*This endss the logic for the login page */
