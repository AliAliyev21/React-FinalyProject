import React from 'react';
import './App.css';
import Headr from './components/Headr';
import Headtwo from './components/Headtwo';
import Main from './components/Main';
import Filters from './components/Filters';


function App() {
  return (
    <div className='App'>
      <div className='container1'>
        <Headr />
      </div>
      <div className='container2'>
        <Headtwo />
      </div>
      <div className='container3'>
        <Filters/>
      </div>
      <div className='container4'>
        <Main />
      </div>
    </div>
  );
}

export default App;
