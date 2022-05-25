import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import MainPage from "./components/views/MainPage";
import Services from "./components/views/Services";
import './Reset.css'
import './App.css'


function App() {
  return (
      <>
          <Router>
              <div className='container'>
                  <div className='navBarMenu'>
                      <div>
                          <a href="/">
                              <img style={{width: 100}} src="/logo.png" alt="SecurityLogo"/>
                          </a>
                      </div>
                      <nav>
                          <Link  to="/main-page"  className='mainPage'>Main</Link>
                          <Link  to="/services"  className='service'>Services</Link>
                      </nav>
                  </div>
                  <Routes>
                      <Route path="/main-page" element={<MainPage/>}/>
                      <Route path="/services" element={<Services/>}/>
                  </Routes>
                  <footer className='footer'>
                      <p> დამზადებულია სტაჟიორის მიერ c 5/16/2022</p>
                  </footer>
              </div>
          </Router>
      </>
  );
}

export default App;
