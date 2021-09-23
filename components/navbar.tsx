import type { NextPage } from 'next';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
interface Props {

}

const NavBar: NextPage<Props> = (props) => {
    return (
        <Navbar className="navbar" bg="primary" expand="lg" variant="dark">
            <Container>
                <Link href="/" passHref={true}>
                    <Navbar.Brand>
                        Booking-App
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link href="/" passHref={true}>
                            <Nav.Link href="">
                                Home
                            </Nav.Link>
                        </Link>
                        <Link href="/login" passHref={true}>
                            <Nav.Link>
                                Login
                            </Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavBar;