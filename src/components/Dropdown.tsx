import { useState } from 'react'

export const DropdownCaret = () => <svg xmlns="http://www.w3.org/2000/svg" 
    fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
    className="w-6 h-6 inline-block float-right border-l-2 pl-2">
<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

const ListTitle = ({idSelector, isExpanded}: {idSelector:string, isExpanded: boolean}) => <li 
      role='label' 
      id={idSelector}
      className=''>
  <div className={ `${isExpanded ? '' : 'border-b-2'} border-l-2 border-r-2 border-t-2 p-2`}>
    Doppdown <DropdownCaret />
  </div>
</li>    

export const Dropdown = ({ idSelector }: { idSelector: string }) => {
  const [isExpanded, setIsExpanded] = useState(false); 
  
  return <ul className='inline-block  text-white relative w-[200px] relative bg-slate-700'
              onClick={ () => setIsExpanded(!isExpanded)}>
    <ListTitle idSelector={idSelector} isExpanded={isExpanded} />
    <li className=''>
      <ul className={ ` ${isExpanded ? '' : 'hidden'} absolute border-l-2 border-r-2  border-b-2 w-full px-2 pb-2 bg-slate-700`}
          aria-expanded={isExpanded} 
          aria-labelledby={idSelector} 
          role='listbox'>
        <li className='' role='option'>option 1</li>
        <li className='' role='option'>option 1</li>
        <li className='' role='option'>option 1</li>
        <li className='' role='option'>option 1</li>
        <li className='' role='option'>option 1</li>
      </ul>
    </li>
  </ul>
}


