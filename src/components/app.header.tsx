'use client'
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const AppHeader = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link href={"/"} className="navbar-brand">NextJS Project</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" href={"/blogs"}>Blogs</Link>
              <Link className="nav-link" href="/youtube">Youtube</Link>
              <Link className="nav-link" href="/tiktok">Tiktok</Link>
              <Nav.Link href="#link">   
                  Link            
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppHeader;
