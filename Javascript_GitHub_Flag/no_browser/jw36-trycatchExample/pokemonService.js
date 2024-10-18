async function getPokemonsList() {
    try {
        const response = await fetch("httokeapi.co/api/ve/pokemon/pikachu");
        const result = await response.json();

         return result;
    } catch(error) {
        const pokeChaosError = new Error("Pokemons Chaos!");
        throw pokeChaosError;
    }
    
}

export default {
    getPokemonsList
};