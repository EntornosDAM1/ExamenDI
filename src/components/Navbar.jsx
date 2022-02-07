import React from 'react';
import {Container,Button} from 'react-bootstrap';
import {Navbar,NavDropdown,Nav,Form,FormControl} from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas'
import MenuElements  from '../Arrays/MenuElements';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  changeClicked() {
    this.setState({ clicked: !this.state.clicked });
  }


  render() {
    return (
      <Navbar bg="light" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
        {MenuElements.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.path}  onClick={this.changeClicked.bind(this)}>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    )
  }
}
export default Navbar;