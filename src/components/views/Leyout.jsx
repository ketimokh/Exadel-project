import CustomLink from "./CustumLink";
import {Link, Outlet} from "react-router-dom";
import Logo from '../../images/logo.png'


function Layout() {
    return (
        <>
            <div className='navBarMenu'>
                <Link to="/main-page">
                    <img style={{width: 100}} src={Logo} alt="SecurityLogo"/>
                </Link>
                <nav>
                    <CustomLink  to="/main-page" >Main</CustomLink>
                    <CustomLink  to="/services">Services</CustomLink>
                </nav>
            </div>
            <Outlet />
        </>
    );
}

export default Layout