import { useEffect, useState } from 'react';
import { SearchInput } from '../components/SearchInput';
import { PokemonTypesBar } from '../components/PokemonTypesBar';
import { TileList } from '../components/TileList';
import { Dropdown } from '../components/Dropdown';


export type PokemonTileProp = {
  id: number,
  pokemon_species_id: number,
  name: string,  
  // pokemon_v2_pokemonsprites: object,
};


const searchData = (list: PokemonTileProp[], searchInput: string) => {
  return list.filter(item => {
    const pokeId = item.pokemon_species_id.toString();
      return pokeId.includes(searchInput)
      || item.name.includes(searchInput)
      
    });
  }
  
  const fetchPokemon = () => fetch('https://beta.pokeapi.co/graphql/v1beta'
  , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `query getPokemon {
        pokemon_v2_pokemon {
          id
          pokemon_species_id
          name              
          pokemon_v2_pokemonsprites(order_by: {pokemon_id: asc}) {
            sprites
          }
        }
      }`,
      variables: null,
    }),
  })
  .then(data => data.json());

  export const Main = () =>  {    
    
    const [searchInput, setSearchInput] = useState('');
    const [list, setList] = useState<PokemonTileProp[]>([]);
    
  //   useEffect(() => {      
  //   fetchPokemon()
  //     .then(json => {
  //       console.log('fetching pokemon');
  //       const uniques = json.data.pokemon_v2_pokemon
  //         .filter((item: PokemonTileProp) => item.id === item.pokemon_species_id)
  //       setList(uniques);
  //     });
  // }, [fetchPokemon]);  

  let listVM: PokemonTileProp[] = [];
  if(list.length) {
    listVM = !searchInput ? list //.slice(0, 50)
      : searchData(list, searchInput);
  }

  return <div>
    <section>
      <SearchInput state={searchInput} setState={setSearchInput} /> 
      {
        <div className='float-right h-full p-5'>{listVM.length} Pokemon</div>
      }
      
      <PokemonTypesBar />
      <Dropdown idSelector='filter' />
    </section>

    {/* <TileList list={listVM} /> */}
  </div>
}
