import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navi from './component/Navi';
import About from './component/About';
import Maincomponent from './component/Maincomponent';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Routes>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/' element={<Maincomponent></Maincomponent>}></Route>
      </Routes>     
    </div>
  );
}

export default App;
