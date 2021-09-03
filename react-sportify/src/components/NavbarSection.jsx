import { Navbar, Nav, Container, Button } from "react-bootstrap";
const NavbarSection = () => {
  return (
    <>
      <Navbar
        style={{ background: "#3a0505" }}
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home" className="col-xs-12">
            <Button className="btn navbarButtons d-flex justify-content-center align-items-center rounded-circle bg-dark">
              <i className="bi bi-chevron-left text-light"></i>
            </Button>
          </Navbar.Brand>
          <Navbar.Brand href="#home">
            <Button className="btn navbarButtons d-flex justify-content-center align-items-center rounded-circle bg-dark">
              <i className="bi bi-chevron-right text-light"></i>
            </Button>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link className=" text-center" href="#features">
                Trending
              </Nav.Link>
              <Nav.Link className=" text-center" href="#pricing">
                Podcast
              </Nav.Link>
              <Nav.Link className=" text-center" href="#pricing">
                Moods and Genres
              </Nav.Link>
              <Nav.Link className=" text-center" href="#pricing">
                New Releases
              </Nav.Link>
              <Nav.Link className=" text-center" href="#pricing">
                Discover
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarSection;
