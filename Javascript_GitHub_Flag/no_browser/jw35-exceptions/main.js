const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");

try {
    const response = await fetch("httpokeapi.co/api/v2/pokemon-pikach");
    const result = await response.json();

} catch(error) {
    alert("Erro de internet. PVF faça refresh!");
}


//  Erro forçado na API