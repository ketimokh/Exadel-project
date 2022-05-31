import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import MainPage from "./components/views/MainPage";
import Services from "./components/views/Services";
import './Reset.css'
import './App.css'
//import Layout from "./components/views/Leyout";
import Logo from "./images/logo.png";
import CustomLink from "./components/views/CustumLink";


const App = () => {
  return (
      <>
          <BrowserRouter>
              <div className='container'>
                  <div className='navBarMenu'>
                      <Link to="/main-page">
                          <img style={{width: 100}} src={Logo} alt="SecurityLogo"/>
                      </Link>
                      <nav>
                          <CustomLink  to="/" >Main</CustomLink>
                          <CustomLink  to="/services">Services</CustomLink>
                      </nav>
                  </div>
                  <Routes>
                      <Route path="/" element={<MainPage/>}/>
                          <Route path="/main-page" element={<MainPage/>}/>
                          <Route path="/services" element={<Services/>}/>
                  </Routes>
                  <footer className='footer'>
                      <p> Made by Keti Mokhevishvili 31/05/2022</p>
                      <br/>
                          <p>
                              for exadel's company
                          </p>
                  </footer>
              </div>
          </BrowserRouter>
      </>
  );
}

export default App;
