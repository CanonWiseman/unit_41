import React, {useState, useEffect}from "react";
import Colors from "./Colors";
import AddColorForm from "./AddColorForm";
import DisplayColor from "./DisplayColor";
import {Route, Switch, Redirect, BrowserRouter} from "react-router-dom";


const Routes = () =>{
    const [colors, setColor] = useState([]);

    function addColor(newColor){
        const newColors = [...colors, {colorName: newColor.colorName, colorValue: newColor.colorValue}];
        setColor(newColors);
    }

    console.log(colors);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/colors/new"> <AddColorForm addColor={addColor}/> </Route>
                <Route exact path="/colors/:color"> <DisplayColor/> </Route>
                <Route exact path="/colors"> <Colors colors={colors}/> </Route>
                <Route><Redirect to="/colors"/></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;