import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () =>{
    return(
        <div className="Nav">
            <Link to="/dogs/Whiskey">Whiskey</Link>
            <Link to="/dogs/Duke">Duke</Link>
            <Link to="/dogs/Perry">Perry</Link>
            <Link to="/dogs/Tubby">Tubby</Link>
        </div>
    )
}

export default Nav;