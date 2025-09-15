


/**
 * Makes a request to the PokeAPI, getting a random Pokemon found in the API.
 * @author Alex Holder <alex.holder@coderacademy.edu.au>
 *
 * @async
 * @returns {Promise<object>}
 */
async function getRandomPokemon(){
	let randomPokemonNumber = Math.floor(Math.random() * 1025) + 1;
	let result = await getPokemonByNumber(randomPokemonNumber);
	return result;
}



/**
 * Makes a request to the PokeAPI. 
 * 
 * If a targetNumber param is given and it's a valid number between 1 and 1025, specific data about the Pokemon with the National PokeDex ID matching that number will be returned.
 * 
 * If no targetNumber param is given, data for Pikachu will be retrieved.
 * @author Alex Holder <alex.holder@coderacademy.edu.au>
 *
 * @async
 * @param {number?} [targetNumber=25] 
 * @returns {Promise<object>}
 */
async function getPokemonByNumber(targetNumber = 25){
	if (Number.isNaN(targetNumber)){
		return "Invalid number given. Was given: " + targetNumber
	}

	if (targetNumber < 0 || targetNumber > 1025){
		return "Number outside of PokeAPI's accepted range. Was given: " + targetNumber
	}

	let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + targetNumber);
	let data = await response.json();
	return data;
}

module.exports = {
	getRandomPokemon, getPokemonByNumber
}