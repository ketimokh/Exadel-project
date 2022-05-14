import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <>
            <h3> Main Page</h3>
            <nav>
                <Link to="/services">Services</Link>
            </nav>
        </>
    )
}

export default MainPage