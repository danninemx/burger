const express = require('express');
const orm = require('orm');

// ================================================================================
// ROUTER
// ================================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
