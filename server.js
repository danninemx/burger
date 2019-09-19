// ==============================================================================
// DEPENDENCIES
// ==============================================================================
const express = require('express');

// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================

// Declare express server usage in node
let app = express();

// Sets an initial port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
