import { Container, Row, Col, Nav } from "react-bootstrap";
import NavbarSection from "./NavbarSection";
import SportifyHome from "./SportifyHome";

const Sidebar = () => {
  return (
    <>
      <Container className="h-auto" fluid>
        <Row>
          <Col xs={2} className="p-0 " id="sidebar-wrapper">
            <Nav
              style={{ background: "#0c0d0c", height: "auto" }}
              className="col-md-12 col-12 col-lg-12 d-none d-md-block sidebar"
              activeKey="/home"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
              <div className="sidebar-sticky"></div>
              <Nav.Item className="d-flex">
                <Nav.Link className="text-light" href="/home">
                  <i className="bi bi-house-door"></i>
                </Nav.Link>
                <Nav.Link className="text-light" href="/home">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="d-flex">
                <Nav.Link className="text-light" href="/home">
                  <i className="bi bi-search"></i>
                </Nav.Link>
                <Nav.Link className="text-light" href="/home">
                  Search
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="d-flex">
                <Nav.Link className="text-light" href="/home">
                  <i className="bi bi-book"></i>
                </Nav.Link>
                <Nav.Link className="text-light" href="/home">
                  Your Library
                </Nav.Link>
              </Nav.Item>
              <br />
              <hr className="text-light" />
              <Nav.Item className="d-flex">
                <Nav.Link className="text-light" href="/home">
                  <i
                    className="bi bi-plus"
                    style={{
                      color: "White",
                      background: "#b3b3b3",
                    }}
                  ></i>
                </Nav.Link>
                <Nav.Link className="text-light" href="/home">
                  Create Playlist
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="d-flex">
                <Nav.Link className="text-light" href="/home">
                  <i
                    className="bi bi-heart-fill"
                    style={{
                      color: "red",
                      background: "#b3b3b3",
                    }}
                  ></i>
                </Nav.Link>
                <Nav.Link className="text-light" href="/home">
                  Liked Songs
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link className="text-light" href="/home">
                  Funky Heavy Blues
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-light" eventKey="link-1">
                  Your Top Songs 2020
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-light" eventKey="link-1">
                  In Love With You - Erykah B.
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-light" eventKey="link-2">
                  This Is Rod Stewart
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-light" eventKey="link-2">
                  FRANCHISE ft. Young Thug
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-light" eventKey="link-2">
                  Your Top Songs 2019
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-light" eventKey="link-2">
                  Metallica
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-light" eventKey="link-2">
                  Pantera Rules
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-light" eventKey="link-2">
                  This Is Megadeath
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-light" eventKey="link-2">
                  Steel Panther
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-light" eventKey="disabled">
                  Jazz Classics
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-light" eventKey="disabled">
                  Jazz Classics
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col
            xs={10}
            id="page-content-wrapper"
            style={{ background: "#3a0505" }}
            className="p-0"
          >
            <NavbarSection />
            <Container>
              <SportifyHome />
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sidebar;
