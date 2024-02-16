/*

Faça uma chamada para a api "rick and morty" e resgate informações dos seguintes personagens: Rick
Sanchez, Morty Smith, Summer Smith, Beth Smith, Jerry Smith. Ajuste os dados para que fiquem igual à
saída de exemplo abaixo.

*/

const BASE_URL = "https://rickandmortyapi.com/api/character"

async function getRickAndMortyCharacters(url) {
  const dados = await fetch(url);
  const response = await dados.json();

  const responseFilter = await response?.results?.map((item) => {
    return {
      nome: item.name,
      genero: item.gender,
      avatar: item.image,
      especie: item.species,
    };
  });

  return responseFilter;
}

const finalResult = getRickAndMortyCharacters(BASE_URL)

finalResult.then(console.log)