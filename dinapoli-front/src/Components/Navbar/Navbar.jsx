import React from "react";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

const Navigation = () => {
  const pathname = window.location.pathname;

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} fixed="top" className="mb-3">
          <Container fluid>
            {/* <Navbar.Brand href="#" className="text-uppercase font-weight-bold px-3 mx-auto">Pizza Dinapoli</Navbar.Brand> */}
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand} basic-navbar-nav`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Navbar.Brand
                    href="#"
                    className="text-uppercase font-weight-bold px-3 mx-auto"
                  >
                    Pizza Dinapoli
                  </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                {pathname === "/" ? (
                  <Nav className="justify-content-center flex-grow-1 pe-3">
                    <Nav.Link className="px-4" href="#services">
                      Nos Services
                    </Nav.Link>
                    <Nav.Link className="px-4" href="#menu">
                      La Carte
                    </Nav.Link>
                    <Nav.Link className="px-4" href="/products">
                      Nos Produits
                    </Nav.Link>
                    <Nav.Link className="px-4" href="#contact">
                      Contact
                    </Nav.Link>
                    <Nav.Link className="px-4" href="/team">
                      La Squadra
                    </Nav.Link>
                    <Nav.Link className="px-4" href="/gallery">
                      Galerie
                    </Nav.Link>
                  </Nav>
                ) : (
                  <Nav className="justify-content-center flex-grow-1 pe-3">
                    <Nav.Link className="px-4" href="/">
                      Accueil
                    </Nav.Link>
                    <Nav.Link className="px-4" href="/products">
                      Nos Produits
                    </Nav.Link>
                    <Nav.Link className="px-4" href="#contact">
                      Contact
                    </Nav.Link>
                    <Nav.Link className="px-4" href="/team">
                      La Squadra
                    </Nav.Link>
                    <Nav.Link className="px-4" href="/gallery">
                      Galerie
                    </Nav.Link>
                  </Nav>
                )}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Navigation;
