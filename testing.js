const Json = require("./response_ability.json");



function buscarPokemon(pokeName) {

    let pokemon = Json.results.find(x => x.name == pokeName)

    if (pokemon) {
        return console.log("Exito, la URL es: " + pokemon.url);
    } else {
        return console.log("El pokemon no ha sido encontrado, ha perdido el pokeduelo");
    }
}

buscarPokemon("battle-armor")


