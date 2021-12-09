import React from 'react';
import Mainview from './components/MainView'
import {BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Mainview/>
      </BrowserRouter>
    </div>
  );
}

export default App;
