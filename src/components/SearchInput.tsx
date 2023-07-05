type PropState = {
  state: string,
  setState: React.Dispatch<React.SetStateAction<string>>
}

export const SearchInput = ({setState, state}: PropState) => {

  return <input 
      className="w-4/12 p-2 rounded-sm shadow-lg text-black"
      type='text'
      onChange={(e) => setState(e.target.value)} 
      value={state}
      placeholder="Search Pokemon" />
}