import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home';
import FavList from './component/FavList';




function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Fav' element={<FavList />} />
      </Routes>
    </div>
  );
}

export default App;