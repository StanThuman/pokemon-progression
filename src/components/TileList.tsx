import { useEffect, useState } from "react";
import { PokemonTileProp } from '../../src/views/main';





const Tile = ({ id, name }: PokemonTileProp) => {
  const baseImageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  const imageUrl = baseImageUrl + id + '.png'; // JSON.parse(pokemon_v2_pokemonsprites[0].sprites);  
  return <div className="bg-slate-500 text-center py-5">
    <img className="m-auto" src={imageUrl} />
    <div className="capitalize">{ name }</div>
    <div>#{id}</div>
  </div>
}



export const TileList = ({ list }: { list: PokemonTileProp[] }) => {

  return <>
    <div className="grid grid-cols-7 grid-flow-row gap-4">
      {
        list.length && list.map(item => <Tile key={item.id} {...item } />)
      }
    </div>
  </>
}