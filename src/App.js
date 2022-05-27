import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPage from "./components/views/MainPage";
import Services from "./components/views/Services";
import './Reset.css'
import './App.css'
import Layout from "./components/views/Leyout";


function App() {
  return (
      <>
          <Router>
              <div className='container'>
                  <Routes>
                      <Route path="/" element={<Layout />}>
                          <Route path="/main-page" element={<MainPage/>}/>
                          <Route path="/services" element={<Services/>}/>
                      </Route>
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
