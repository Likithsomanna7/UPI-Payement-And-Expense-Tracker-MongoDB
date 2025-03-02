const express = require('express');
const path = require('path');
const { connected } = require('./connection.js');
const model = require('./model/schema.js'); // Fixed file name
const router = require('./Routes/serve.js');
const router2 = require('./Routes/main.js');
const cookieparser = require('cookie-parser');
const { authhandler } = require('./middleware/auth.js');

const app = express();

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Middleware
app.use(cookieparser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Connect to the database
connected();

// Routes
app.use('/pay', router);
app.use('/pay/main', authhandler, router2);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});