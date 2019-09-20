// ==============================================================================
// DEPENDENCIES
// ==============================================================================
const connection = require("connection");


// ==============================================================================
// METHODS
// methods that will execute the necessary MySQL commands in the controllers
// ==============================================================================
let orm = {
    selectAll = () => { },

    insertOne = () => { },

    updateOne = () => { }

}

/*
// Use Handlebars to render the main index.html page with the plans in it.
app.get("/", function(req, res) {
    connection.query("SELECT * FROM plans;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      res.render("index", { plans: data });
    });
  });
  
  // Create a new plan
  app.post("/api/plans", function(req, res) {
    connection.query("INSERT INTO plans (plan) VALUES (?)", [req.body.plan], function(err, result) {
      if (err) {
        return res.status(500).end();
      }
  
      // Send back the ID of the new plan
      res.json({ id: result.insertId });
      console.log({ id: result.insertId });
    });
  });
  
  // Update a plan
  app.put("/api/plans/:id", function(req, res) {
    connection.query("UPDATE plans SET plan = ? WHERE id = ?", [req.body.plan, req.params.id], function(err, result) {
      if (err) {
        // If an error occurred, send a generic server failure
        return res.status(500).end();
      }
      else if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
  
    });
  });
*/

module.exports = orm;