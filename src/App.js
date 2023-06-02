import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Heaer from './Heaer';
import Product from './Product';
import Crat from './Crat';
import Photo from './Photo';
import Login from './login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
        <Routes>
          <Route path="/login" element={<Login />} />
          
            <Route path="/" element={<Photo />} />
            <Route path="/Crad" element={<Crat />} />
          {/* </Route> */}
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
