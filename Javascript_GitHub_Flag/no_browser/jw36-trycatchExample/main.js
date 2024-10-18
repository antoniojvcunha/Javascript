import pokemonService from "./pokemonService.js";

try {
    const list = await pokemonService.getPokemonsList();
;    console.log(list);

}catch(error) {
    console.log(error);
    alert("ERROR!");
}