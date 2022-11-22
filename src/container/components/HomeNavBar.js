import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../images/logo/logo.png";
//import {redirectUser} from "../../config/redirect";
const HomeNavBar = () => {
  // if (localStorage.getItem("token")) {
  //   redirectUser();
  // }
  let location = useLocation();

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to={"/"}>
            {" "}
            <img className="" src={logo} alt="logo" />{" "}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0 mr-5" navbarScroll>
            <Nav.Link>
              <Link to={"/"}>Home</Link>
            </Nav.Link>

            {location.pathname === "/" && (
              <NavDropdown title="Services" id="navbarScrollingDropdown">
                <Link to={"/training-home"} className={"dropdown-item"}>
                  Training
                </Link>
                <Link to={"/comming-soon"} className={"dropdown-item"}>
                  Cloud Labs
                </Link>
                <Link to={"/comming-soon"} className={"dropdown-item"}>
                  Re-invent Education
                </Link>
                <Link to={"/comming-soon"} className={"dropdown-item"}>
                  HR Solutions
                </Link>

                {/*
              <NavDropdown.Item>Vendor Management</NavDropdown.Item>
              <NavDropdown.Item>Project Management</NavDropdown.Item>
              <NavDropdown.Item>GLocal Audit Compliance</NavDropdown.Item>
              */}
              </NavDropdown>
            )}

            {location.pathname !== "/" && location.pathname !== "/comming-soon" && (
              <Nav.Link>
                <Link to={"/register-organization"}>Register Organization</Link>
              </Nav.Link>
            )}

            {/*   <Nav.Link href="#" disabled>
              About
            </Nav.Link> */}
          </Nav>

          {location.pathname === "/training-home" && (
            <Nav className="d-flex">
             <Link to={"/register"} className="btn-main-common mr-3 fs-16">Register</Link>
            <Link to={"/login"} className="btn-main-common fs-16">Login</Link>                      
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomeNavBar;
