import {Navbar, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function NavHeader() {
    return (
        <Navbar>
            <Navbar.Brand as={NavLink} to="/">Jogo da memória</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="me-auto">
                    <Nav.Link href="/Game/4">Fácil</Nav.Link>
                    <Nav.Link href="/Game/8">Médio</Nav.Link>
                    <Nav.Link href="/Game/12">Difícil</Nav.Link>
                    <Nav.Link href="/Game/34">Impossível</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavHeader