import {useState} from 'react';
import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import Colors from './Colors';
import DisplayColor from './DisplayColor';
import AddColorForm from './AddColorForm';

function App() {

  const [colors, setColors] = useState([]);

  function addColor(newColor){
    const newColors = [...colors, newColor];
    setColors(newColors);
  }

  return (
    <div className='App'>
      <Routes>
          <Route path="/colors" element={<Colors colors={colors}/>}></Route>
          <Route path="/color/new" element={<AddColorForm addColor={addColor}/>}></Route>
          <Route path="/color/:color" element={<DisplayColor/>}></Route>
          <Route path="*" element={<Navigate to="/colors"/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
