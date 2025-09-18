// Simple JavaScript web server library
const express = require("express");
const app = express();

// Get our .env file data ready
require("dotenv").config();
// From NodeJS v20 onwards (early 2023),
// dotenv could be removed if we run the app with:
// node --env-file-if-exists=.env src/web-api-server/index.js
const PORT = process.env.PORT || 3456;


// Handy for reading data sent in on bodies of requests:
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies


// Basic GET request handler
app.get("/", (request, response) => {
	response.json({
		message:"Hello, world!"
	});
});


// Basic POST request handler that reads request body content
app.post("/ping", async (request, response) => {
	response.json({
		pong: request.body
	});
});

// Healthcheck endpoint for Docker usage
app.get("/health", (request, response) => {
	response.json({
		message:"Health check success!"
	});
});

const pokemonFetcherRouter = require("./controllers/pokemonFetcher");
app.use("/pokemon", pokemonFetcherRouter);


// Activate the server and start receiving web traffic
app.listen(PORT, () => {
	console.log("Server running on port:" + PORT);
});





