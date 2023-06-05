import logo from './logo.svg';
import './App.css';
import Navigation from './component/Navigation';
import Player from './component/Player';
import PlayerReactMaterializw from './component/PlayerReactMaterializw';
import { Route, Routes } from 'react-router-dom';
import Contact from './component/Contact';
import Detail from './component/Detail';

function App() {
  return (

    <div>
    <Navigation/>
    <Routes>
      <Route path='/' element={<PlayerReactMaterializw/>}></Route>
      <Route path='/detail/:id' element={<Detail/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
