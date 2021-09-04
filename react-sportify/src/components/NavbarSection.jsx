import { Navbar, Nav, Container, Button, Col } from "react-bootstrap";
const NavbarSection = () => {
  return (
    <>
      <Container>
        <Col>
          <Navbar
            style={{ background: "#3a0505" }}
            collapseOnSelect
            expand="lg"
            variant="dark"
          >
            {/* <Navbar.Brand href="#home">
              <Button className="btn navbarButtons d-flex justify-content-center align-items-center rounded-circle border border-dark bg-dark">
                <i className="bi bi-chevron-left text-light"></i>
              </Button>
            </Navbar.Brand>
            <Navbar.Brand href="#home">
              <Button className="btn navbarButtons d-flex justify-content-center align-items-center rounded-circle border border-dark bg-dark">
                <i className="bi bi-chevron-right text-light"></i>
              </Button>
            </Navbar.Brand> */}

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link className=" text-center text-light " href="#features">
                  Trending
                </Nav.Link>
                <Nav.Link className=" text-center text-light " href="#pricing">
                  Podcast
                </Nav.Link>
                <Nav.Link className=" text-center text-light " href="#pricing">
                  Moods and Genres
                </Nav.Link>
                <Nav.Link className=" text-center text-light " href="#pricing">
                  New Releases
                </Nav.Link>
                <Nav.Link className=" text-center text-light " href="#pricing">
                  Discover
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Container>
    </>
  );
};

export default NavbarSection;
