import CustomLink from "./CustumLink";
import {Outlet} from "react-router-dom";


function Layout() {
    return (
        <>
            <div className='navBarMenu'>
                <a href="/main-page">
                    <img style={{width: 100}} src="https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png" alt="SecurityLogo"/>
                </a>
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