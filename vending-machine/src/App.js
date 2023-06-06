
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Coke from "./Coke";
import Sunchips from "./Sunchips";
import NatureValley from "./NatureValley";
import VendingMachine from "./VendingMachine";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine/>
        </Route>
        <Route exact path="/coke">
          <Coke/>
        </Route>
        <Route exact path="/sunchips">
          <Sunchips/>
        </Route>
        <Route exact path="/nature-valley">
          <NatureValley/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
