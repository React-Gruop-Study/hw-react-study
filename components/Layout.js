
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import HeadInfo from './HeadInfo.js';

export default function Layout() {
    return (
        <>
            <HeadInfo />
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Fucking Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Link href="/"><Nav.Link href="/"> Home </Nav.Link></Link>
                        <Link href="/detail"><Nav.Link href="/"> Home </Nav.Link></Link>
                        {/* <Nav.Link to="/" as={Link}> Home </Nav.Link>
                        <Nav.Link to="/detail" as={Link}> Detail </Nav.Link> */}
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}
