import './App.css';
import { BrowserRouter } from "react-router-dom";
import Nav from './Nav';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes/>
        {/* <Nav/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
