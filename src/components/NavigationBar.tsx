import { NavLink } from 'react-router-dom';

const CallToAction = ({route, ctaText}: { route: string, ctaText: string }) => 
<div>
  <NavLink 
    className={({isActive, isPending}) =>  {
      const defaultStyle = 'p-5 ';
      const ctaState = isPending ? '' : isActive ? 'bg-white text-black' : '';
      return defaultStyle + ctaState;
    }} 
    to={route}>{ctaText}</NavLink>
</div>

export const NavigationBar = () => 
  <nav className='bg-slate-700 flex text-white font-bold rounded-sm p-5'>
    <CallToAction ctaText='Home' route='main_window' />
    <CallToAction ctaText='Progress' route='progress' />
    {/* <CallToAction ctaText='Test 1' route='Progress' />
    <CallToAction ctaText='Test 2' route='main_window' />
    <CallToAction ctaText='Test 3' route='main_window' />     */}
  </nav>