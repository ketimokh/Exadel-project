import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import MainPage from "./components/views/MainPage";
import Services from "./components/views/Services";
import './App.css'


function App() {
  return (
      <>
          <div>
              <a href="/">
                  <img src="https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png" alt="SecurityLogo"/>
              </a>
          </div>
          <Router>
              <nav>
                  <Link  to="/main-page"  className='MainPage'>MainPage</Link>
                  <Link  to="/services"  className='Service'>Services</Link>
              </nav>
              <Routes>
                  <Route path="/main-page" element={<MainPage/>}/>
                  <Route path="/services" element={<Services/>}/>
              </Routes>
          </Router>
      </>
  );
}

export default App;
