import logo from "../../assets/images/LOGO.svg";
import { Link } from "react-router-dom";
import React from "react";

export default function Header() {
	return (
		<header className="headerWrap">
			<figure className="headerWrap__fig">
				<img className="logo" src={logo} alt="logo de l'agence Kasa" />
			</figure>
            <nav className="nav-header">
                <ul>
			        <li><Link to="/" className="nav-header_link-home">Accueil</Link></li>
			        <li><Link to="/about" className="nav-header_link-about">À propos</Link></li>
                </ul>
		    </nav>
		</header>
	);
}


