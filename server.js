var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

// Burger is not submitting/text isn't being logged
// Devoured button is being displayed along with <li>'s but no data, still. 
// Devoured button clicks but there's nothing to update and it's throwing an error
// Something must be wrong with my mysql queries or maybe my routes...not sure which.
// maybe submit button isn't sending to the right place because when i clicked it, that's when I got an error that says something about UPDATE burgers SET devoured = undefined WHERE id = 2