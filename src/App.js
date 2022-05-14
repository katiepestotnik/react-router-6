import './App.css';

import {Route, Routes} from 'react-router-dom'

import Main from './pages/Main'
import Price from './pages/Price'
import Currencies from './pages/Currencies'
import Nav from './components/Nav'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="price/:symbol" element={<Price/>}/>
        <Route path="currencies" element={<Currencies/>}/>
      </Routes>
    </div>
  );
}

export default App;
