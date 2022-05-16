import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import MainPage from "./components/views/MainPage";
import Services from "./components/views/Services";
import './Reset.css'
import './App.css'


function App() {
  return (
      <>
          <Router>
          <div className='test'>
              <div>
                  <a href="/">
                      <img style={{width: 100}} src="https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png" alt="SecurityLogo"/>
                  </a>
              </div>
              <nav>
                  <Link  to="/main-page"  className='mainPage'>MainPage</Link>
                  <Link  to="/services"  className='service'>Services</Link>
              </nav>
          </div>
          <div>
              < img className='banner-image' src="https://www.tangerineholdings.co.uk/wp-content/uploads/contact-banner.jpg" alt="SecurityLogo"/>
          </div>
              <Routes>
                  <Route path="/main-page" element={<MainPage/>}/>
                  <Route path="/services" element={<Services/>}/>
              </Routes>
              <footer className='footer'>
                  <p> დამზადებულია სტაჟიორის მიერ c 5/16/2022</p>
              </footer>
          </Router>
      </>
  );
}

export default App;
