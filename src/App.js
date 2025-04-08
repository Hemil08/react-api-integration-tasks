import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Dogs from './pages/Dogs';
import Weather from './pages/Weather';
import Cats from './pages/Cats/Cats';
import Favorites from './pages/Cats/Favorites';
import Coin from './pages/Coin';
import News from './pages/News'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dogs" element={<Dogs/>}/>
        <Route path="/weather" element = {<Weather/>}/>
        <Route path="/cats" element={<Cats/>}/> 
        <Route path='/cats/favorites' element={<Favorites/>}/>
        <Route path='/coin' element={<Coin/>}/>
        <Route path='/news' element={<News/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
