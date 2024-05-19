const express = require('express');
const listEndpoints = require('express-list-endpoints');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Import API routes
const apiRoutes = require('./routes/api'); // Adjust the path if necessary

// Use API routes
app.use('/api', apiRoutes);

// Print all endpoints
console.log(listEndpoints(app));

// Your existing middleware and other setups...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(listEndpoints(app)); // Log endpoints again after the server starts
});
