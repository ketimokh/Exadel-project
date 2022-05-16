import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import MainPage from "./components/views/MainPage";
import Services from "./components/views/services";
import './App.css'


function App() {
  return (
      <div className='App'>
          <div>
              <a href="/">
                  <img src="https://1757140519.rsc.cdn77.org/static/v3/img/products/logo.png" alt="SecurityLogo"/>
              </a>
          </div>
          <Router>
              <nav>
                  <Link  to="/MainPage"  className='MainPage'>MainPage</Link>
                  <Link  to="/Services"  className='Service'>Services</Link>
              </nav>
              <Routes>
                  <Route path="/MainPage" element={<MainPage/>}/>
                  <Route path="/Services" element={<Services/>}/>
              </Routes>
          </Router>
      </div>
  );
}

export default App;
