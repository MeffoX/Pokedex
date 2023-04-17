//run different functions for check types of all pokemons for pokemon area
function checkPokemonType(currentPokemon, j, i) {
    checkIfTypeFire(currentPokemon, j, i);
    checkIfTypeGrass(currentPokemon, j, i);
    checkIfTypeWater(currentPokemon, j, i);
    checkIfTypeNormal(currentPokemon, j, i);
    checkIfTypeBug(currentPokemon, j, i);
    checkIfTypePoison(currentPokemon, j, i);
    checkIfTypeElectric(currentPokemon, j, i);
    checkIfTypeGround(currentPokemon, j, i);
    checkIfTypeFairy(currentPokemon, j, i);
    checkIfTypeFighting(currentPokemon, j, i);
    checkIfTypePsychic(currentPokemon, j, i);
    checkIfTypeRock(currentPokemon, j, i);
    checkIfTypeGhost(currentPokemon, j, i);
    checkIfTypeIce(currentPokemon, j, i);
    checkIfTypeDragon(currentPokemon, j, i);
    checkIfTypeDark(currentPokemon, j, i);
    checkIfTypeSteel(currentPokemon, j, i);
}


//check for all types of pokemon --> when find a type, give a specific color to id=`pokemon-card${i}` and id=`type${i}, ${j}`

function checkIfTypeFire(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('fire') >= 0) {
        document.getElementById(`pokemonCard${i}`).classList.add('type-fire');
        document.getElementById(`type${i}, ${j}`).classList.add('type-fire-p');
    }
}


function checkIfTypeGrass(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('grass') >= 0) {
        document.getElementById(`pokemonCard${i}`).classList.add('type-grass');
        document.getElementById(`type${i}, ${j}`).classList.add('type-grass-p');
    }
}


function checkIfTypeWater(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('water') >= 0) {
        document.getElementById(`pokemonCard${i}`).classList.add('type-water');
        document.getElementById(`type${i}, ${j}`).classList.add('type-water-p');
    }
}


function checkIfTypeNormal(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('normal') >= 0) {
        document.getElementById(`pokemonCard${i}`).classList.add('type-normal');
        document.getElementById(`type${i}, ${j}`).classList.add('type-normal-p');
    }
}


function checkIfTypeBug(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('bug') >= 0) {
        document.getElementById(`pokemonCard${i}`).classList.add('type-bug');
        document.getElementById(`type${i}, ${j}`).classList.add('type-bug-p');
    }
}


function checkIfTypePoison(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('poison') >= 0) {
        document.getElementById(`pokemonCard${i}`).classList.add('type-poison');
        document.getElementById(`type${i}, ${j}`).classList.add('type-poison-p');
    }
}


function checkIfTypeElectric(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('electric') >= 0) {
        document.getElementById(`pokemonCard${i}`).classList.add('type-electric');
        document.getElementById(`type${i}, ${j}`).classList.add('type-electric-p');
    }
}


function checkIfTypeGround(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('ground') >= 0) {
        document.getElementById(`pokemonCard${i}`).classList.add('type-ground');
        document.getElementById(`type${i}, ${j}`).classList.add('type-ground-p');
    }
}


function checkIfTypeFairy(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('fairy') >= 0) {
        document.getElementById(`pokemonCard${i}`).classList.add('type-fairy');
        document.getElementById(`type${i}, ${j}`).classList.add('type-fairy-p');
    }
}


function checkIfTypeFighting(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('fighting') >= 0) {
        document.getElementById(`pokemonCard${i}`).classList.add('type-fighting');
        document.getElementById(`type${i}, ${j}`).classList.add('type-fighting-p');
    }
}


function checkIfTypePsychic(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('psychic') >= 0) {
        document.getElementById(`pokemonCard${i}`).classList.add('type-normal');
        document.getElementById(`type${i}, ${j}`).classList.add('type-normal-p');
    }
}


function checkIfTypeRock(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('rock') >= 0) {
        document.getElementById(`pokemonCard${i}`).classList.add('type-rock');
        document.getElementById(`type${i}, ${j}`).classList.add('type-rock-p');
    }
}


function checkIfTypeGhost(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('ghost') >= 0) {
        document.getElementById(`pokemonCard${i}`).classList.add('type-ghost');
        document.getElementById(`type${i}, ${j}`).classList.add('type-ghost-p');
    }
}


function checkIfTypeIce(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('ice') >= 0) {
        document.getElementById(`pokemonCard${i}`).classList.add('type-ice');
        document.getElementById(`type${i}, ${j}`).classList.add('type-ice-p');
    }
}

function checkIfTypeDragon(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('dragon') >= 0) {
        document.getElementById(`pokemonCard${i}`).classList.add('type-dragon');
        document.getElementById(`type${i}, ${j}`).classList.add('type-dragon-p');
    }
}


function checkIfTypeDark(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('dark') >= 0) {
        document.getElementById(`pokemonCard${i}`).classList.add('type-ghost');
        document.getElementById(`type${i}, ${j}`).classList.add('type-ghost-p');
    }
}


function checkIfTypeSteel(currentPokemon, j, i) {
    if (currentPokemon['types'][0]['type']['name'].indexOf('steel') >= 0) {
        document.getElementById(`pokemonCard${i}`).classList.add('type-rock');
        document.getElementById(`type${i}, ${j}`).classList.add('type-rock-p');
    }
}