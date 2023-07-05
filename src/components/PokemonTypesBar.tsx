import {  PokemonTypeButton } from './PokemonTypeButton';

import bugImage from '../public/bug.png';
import darkImage from '../public/dark.png';
import dragonImage from '../public/dragon.png';
import electricImage from '../public/electric.png';
import fairyImage from '../public/fairy.png';
import fightingImage from '../public/fighting.png';

import fireImage from '../public/fire.png';
import flyingImage from '../public/flying.png';
import ghostImage from '../public/ghost.png';
import grassImage from '../public/grass.png';
import groundImage from '../public/ground.png';
import iceImage from '../public/ice.png';
import normalImage from '../public/normal.png';
import poisonImage from '../public/poison.png';
import psychicImage from '../public/psychic.png';
import rockImage from '../public/rock.png';
import steelImage from '../public/steel.png';
import waterImage from '../public/water.png';


export const PokemonTypesBar = () => {

  return <div className='mt-5 grid grid-rows-3 grid-cols-8 gap-2 text-white'>
    <PokemonTypeButton label='Bug' imageUri={bugImage}/>
    <PokemonTypeButton label='Dark' imageUri={darkImage}/>
    <PokemonTypeButton label='Dragon' imageUri={dragonImage}/>
    <PokemonTypeButton label='Electric' imageUri={electricImage}/>
    <PokemonTypeButton label='Fairy' imageUri={fairyImage}/>
    <PokemonTypeButton label='Fighting' imageUri={fightingImage}/>
    <PokemonTypeButton label='Fire' imageUri={fireImage}/>
    <PokemonTypeButton label='Flying' imageUri={flyingImage}/>
    <PokemonTypeButton label='Ghost' imageUri={ghostImage}/>
    <PokemonTypeButton label='Grass' imageUri={grassImage}/>
    <PokemonTypeButton label='Ground' imageUri={groundImage}/>
    <PokemonTypeButton label='Ice' imageUri={iceImage}/>
    <PokemonTypeButton label='Normal' imageUri={normalImage}/>
    <PokemonTypeButton label='Poison' imageUri={poisonImage}/>
    <PokemonTypeButton label='Psychic' imageUri={psychicImage}/>
    <PokemonTypeButton label='Rock' imageUri={rockImage}/>
    <PokemonTypeButton label='Steel' imageUri={steelImage}/>
    <PokemonTypeButton label='Water' imageUri={waterImage}/>
  </div>
}