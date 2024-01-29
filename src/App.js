import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Container} from 'react-bootstrap'

import MainMenu from "./components/MainMenu.jsx";
import Game from "./components/Game.jsx";


function App() {
  return (
      <Container>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<MainMenu />} />
                  <Route path="/Game/:nPares" element={<Game />} />
              </Routes>
          </BrowserRouter>
      </Container>
  );
}

export default App;
