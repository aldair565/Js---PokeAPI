fetch('https://pokeapi.co/api/v2/pokemon/4')
.then(respuesta => respuesta.json())
.then(pokemon => {
    let element = document.getElementById('charmander')
    element.innerHTML = `<h2>${pokemon.name}</h2>
    <img src='${pokemon.sprites.other.home.front_default}'><p> Type: ${pokemon.types[0].type.name}<p><p> Ability: ${pokemon.abilities[0].ability.name}<p>`;
    console.log(pokemon)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/1')
.then(respuesta => respuesta.json())
.then(pokemon2 => {
    let element2 = document.getElementById('bulbasaur')
    element2.innerHTML = `<h2>${pokemon2.name}</h2>
    <img src='${pokemon2.sprites.other.home.front_default}'><p> Type: ${pokemon2.types[0].type.name}<p><p> Ability: ${pokemon2.abilities[0].ability.name}<p>`;
    console.log(pokemon2)
})
.catch(err=>console.log(err))

fetch('https://pokeapi.co/api/v2/pokemon/7')
.then(respuesta => respuesta.json())
.then(pokemon3 => {
    let element3 = document.getElementById('squirtle')
    element3.innerHTML = `<h2>${pokemon3.name}</h2>
    <img src='${pokemon3.sprites.other.home.front_default}'><p> Type: ${pokemon3.types[0].type.name}<p><p> Ability: ${pokemon3.abilities[0].ability.name}<p>`;
    console.log(pokemon3)
})
.catch(err=>console.log(err))