import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Container} from 'react-bootstrap'

import NavHeader from "./components/NavHeader";

import MainMenu from "./components/MainMenu.jsx";
import Game from "./components/Game.jsx";
import Vitoria from "./components/Vitoria";


function App() {
    return (
        <Container>
            <BrowserRouter>
                <NavHeader></NavHeader>
                <Routes>
                    <Route path="/" element={<MainMenu />} />
                    <Route path="/Game/:nPares" element={<Game />} />
                    <Route path="/Vitoria/:turnos/:nPares" element={<Vitoria />} />
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default App;
