
const section = document.querySelector('section')

function getPokemon(number) {
  for(let i = 1; i <= number; i++){
    const random = Math.floor(Math.random() * 155) +1

    // fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`)
    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.sprites.front_default);
      const image = data.sprites.front_default;
      console.log(image);
      const img = document.createElement('img')
      const p = document.createElement('p')
      p.textContent = data.name
      img.src = data.sprites.front_default
      section.appendChild(img)
      section.appendChild(p)

    })
  }

}

  getPokemon(155)


