import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Colors from "./Colors";
import AddColorForm from "./AddColorForm";
import DisplayColor from "./DisplayColor";
import useSetColor from "./useSetColor";

const Routes = () =>{
    const [colors, setColor] = useSetColor();

    return (
        <Switch>
            <Route exact path="/colors/new"> <AddColorForm setColor={setColor}/> </Route>
            <Route exact path="/colors/:color"> <DisplayColor/> </Route>
            <Route exact path="/colors"> <Colors colors={colors}/> </Route>
            <Route><Redirect to="/colors"/></Route>
        </Switch>
    )
}

export default Routes;