import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/views/MainPage";
import Services from "./components/views/services";
import './App.css'


function App() {
  return (
      <div>
          <BrowserRouter>
              <div className='App'>
                  <Routes>
                      <Route path="/" element={<MainPage />}/>
                      <Route path="services" element={<Services />} />
                  </Routes>
              </div>
          </BrowserRouter>
      </div>
  );
}

export default App;
