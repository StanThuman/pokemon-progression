import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import routes from './router/routes';
import {
  useRoutes,
  BrowserRouter } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';


const App = () => {
  const routerView = useRoutes(routes);
  
  return <div className='h-full w-9/12 mt-5 mx-auto'>    
    <NavigationBar />
    <div className='mt-5'>
      { routerView }
    </div>
    <div>Footer</div>
  </div>
}

function render() {
  ReactDOM.createRoot(document.getElementById('root'))
    .render(
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    );    
}

render();
