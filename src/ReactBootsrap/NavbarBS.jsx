import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarBS(props) {
    return (
        <>
            <Navbar bg={props.bg} data-bs-theme={props.theme}>
                <Container>
                    <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
                    <Nav className="me-auto">
                        {
                            props.items.map((item, index) => (
                                <Nav.Link href={item.link}>{item.title}</Nav.Link>
                            ))
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarBS;