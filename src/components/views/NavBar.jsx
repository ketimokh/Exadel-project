import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useNavBar from "../hooks/useNavBar";

const NavBar = () => {
    const { toggleHamburger, hamburgerOpen } = useNavBar()
    return (
        <div>
            <div className='navigation' style={{ display: hamburgerOpen ? 'inline' : 'none' }}>
                <ul>
                    <li style={{marginBottom: 50}} onClick={() => toggleHamburger()}>
                        <Link className='menu-item ' to="/exadel-project" >Main</Link>
                    </li>
                    <li onClick={() => toggleHamburger()}>
                        <Link className='menu-item' to="/exadel-project/services">Services</Link>
                    </li>
                </ul>
            </div>
            <FontAwesomeIcon icon={faAlignJustify} className='burger-menu'  onClick={toggleHamburger} />
        </div>
    )
}

export default NavBar
