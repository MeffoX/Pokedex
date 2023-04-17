let allPokemon = [];
let currentPokemonList = 21;
let increaseList = 0;
isLoading = false;
let scrollPx = 0;


function init() {
    loadPokemon();
}



async function generatePokemon() {
    for (let i = 1 + increaseList; i < currentPokemonList; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let currentPokemon = await response.json();
        allPokemon.push(currentPokemon);
    }
}


async function loadPokemon() {
    await generatePokemon();

    for (let i = 0 + increaseList; i < allPokemon.length; i++) {
        let currentPokemon = allPokemon[i];

        let pokemonArea = document.getElementById('pokemonArea');
        pokemonArea.innerHTML += createPokemonCard(currentPokemon, i);
        createTypeOnPokemonCard(currentPokemon, i);
    }
}


function renderAllPokemon() {
    let pokemonArea = document.getElementById('pokemonArea');
    pokemonArea.innerHTML = '';

    for (let i = 0; i < allPokemon.length; i++) {
        let currentPokemon = allPokemon[i];

        pokemonArea.innerHTML += createPokemonCard(currentPokemon, i);
        createTypeOnPokemonCard(currentPokemon, i);
    }
    isLoading = false;
}


function createTypeOnPokemonCard(currentPokemon, i) {
    for (let j = 0; j < currentPokemon['types'].length; j++) {
        let newType = currentPokemon['types'][j];

        let typesArea = document.getElementById(`typeArea${i}`);
        typesArea.innerHTML += createTypesArea(newType, i, j);
        checkPokemonType(currentPokemon, j, i);
    }
}


window.onscroll = async function() {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight && !isLoading) {
        isLoading = true;
        currentPokemonList = currentPokemonList + 20;
        increaseList = increaseList + 20;
        await loadPokemon();
        isLoading = false;
    }
}