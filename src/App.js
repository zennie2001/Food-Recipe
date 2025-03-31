import logo from './logo.svg';
import './App.css';
import Mainpage from './Component/Mainpage';
import { Route, Routes } from 'react-router-dom';
import Mealinfo from './Component/Mealinfo';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/:mealid' element={<Mealinfo/>} />   
      {/* in path='/:mealid' , :mealid shows the id of dishes */}
      
      
    </Routes>
    
  );
}

export default App;
