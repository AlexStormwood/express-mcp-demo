const express = require("express");
const { getRandomPokemon, getPokemonByNumber } = require("../../shared/pokemonFetcher");
const router = express.Router();

router.get("/random", async (request, response) => {
	let result = await getRandomPokemon();
	response.json({
		name: result.name
	});
});

router.get("/id/:id", async (request, response) => {
	let result = await getPokemonByNumber(request.params.id);
	response.json({
		name: result.name
	});
});

router.post("/id", async (request, response) => {
	let result = await getPokemonByNumber(request.body.id);
	response.json({
		name: result.name
	});
});