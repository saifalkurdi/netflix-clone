import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home';



function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
    
     </Routes>
    </div>
  );
}

export default App;