// Require/import the HTTP module
var http = require("http");

// Define two ports to listen for incoming requests
var nicePORT = 7000;
var meanPORT = 7500;

// Function that handles requests
function niceSaying(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You have nice hair.");
}

// Function that handles requests
function meanSaying(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("You have ugly hair.");
  }

// Creating our servers
var server1 = http.createServer(niceSaying);
var server2 = http.createServer(meanSaying);

// Server listening to requests from the nicePort
server1.listen(nicePORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + nicePORT);
});

// Server listening to requests from the meanPort
server2.listen(meanPORT, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + meanPORT);
  });