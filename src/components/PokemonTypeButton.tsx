

export const PokemonTypeButton = ({ imageUri, label }: { imageUri: string, label: string }) => {
  return <button className='shadow-lg hover:bg-slate-400 bg-slate-700 p-2 rounded-sm inline mr-2 mb-2 border-slate-500 border-2'>
    <div className='flex items-center'>    
      <img className='h-10 pr-2' src={imageUri} />
      <span className='text-center font-bold'>{label}</span>
    </div>        
    </button>
}