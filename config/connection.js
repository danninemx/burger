// ==============================================================================
// DEPENDENCIES
// ==============================================================================
const mysql = require("mysql");
let started = false;

// ==============================================================================
// DATABASE CONNECTION
// ==============================================================================
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
})

// Call this to end app.
// let farewell = function () {
//     connection.end();
//     console.log(`\n===== CLOSING SUPERVISION PORTAL =====\n\n\n`);
// }

module.exports = connection;