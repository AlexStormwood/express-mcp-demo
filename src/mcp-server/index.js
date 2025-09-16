const { getRandomPokemon, getPokemonByNumber } = require("../shared/pokemonFetcher");

const FastMCP = require("fastmcp").FastMCP;
const z = require("zod");

const mcpServer = new FastMCP({
	name: "Super Cool MCP Server",
	version: "1.0.0"
});

mcpServer.addTool({
	name: "ping",
	description: "Basic sample tool that responds 'pong' to a given 'ping'.",
	execute: () => {
		return "pong"
	}
});


mcpServer.addTool({
	name: "getRandomPokemon",
	description: "Selects a random Pokemon ID number and fetches data about that Pokemon from the PokeAPI.",
	execute: async () => {
		let result = await getRandomPokemon();
		return JSON.stringify(result);
	}
});

mcpServer.addTool({
	name: "getAmountOfRandomPokemon",
	description: "Selects a specified quantity of random Pokemon ID numbers and fetches data about those Pokemon from the PokeAPI.",
	parameters: z.object({
		quantity: z.number()
	}),
	execute: async (args) => {
		let result = [];
		for (let index = 0; index < args.quantity; index++) {
			let retrievedData = await getRandomPokemon();
			result.push(retrievedData);
		}
		return JSON.stringify(result);
	}
});

mcpServer.addTool({
	name: "getPokemonByID",
	description: "Fetches data about a specified Pokemon from the PokeAPI, where the user provides the specific Pokemon ID to search for.",
	parameters: z.object({
		id: z.number()
	}),
	execute: async (args) => {
		let result = await getPokemonByNumber(args.id);
		return JSON.stringify(result);
	}
});

mcpServer.start({
	transportType: "stdio"
});







