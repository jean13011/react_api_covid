import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => (
    <div>
        <div>
            <ul style={{display: "flex", justifyContent: "space-around"}}>
                <li><Link to="/">Accueil</Link></li>
                <li> <Link to="/country">Pays</Link></li>
                <li> <Link to="/help">Aide</Link></li>
            </ul>
        </div>
    </div>
);

export default NavBar;
