function createPokemonCard(currentPokemon, i) {
    return /*html*/ `
        <div id="pokemonCard${i}" class="pokemonCard" onclick="openPokemonCard(${i})">
            <div class="pokemonHeadline">
                <h1 class="pokemonNames" id="pokemonNames">${currentPokemon['name']}</h1>
                <p>#${currentPokemon['id']}</p>
            </div>
            <div class="typeImage">
                <div id="typeArea${i}">

                </div>
                <img class="pokemonImage" id="pokemonImage" src="${currentPokemon['sprites']['other']['official-artwork']['front_default']}">
            </div>
        </div>
    `;
}


function createTypesArea(newType, i, j) {
    return /*html*/ `
        <p id="type${i}, ${j}" class="type">${newType['type']['name']}</p>
    `;
}