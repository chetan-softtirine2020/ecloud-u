import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../images/logo/logo.svg";
//import {redirectUser} from "../../config/redirect";
const HomeNavBar = () => {
  // if (localStorage.getItem("token")) {
  //   redirectUser();
  // }
  let location = useLocation();
  console.log(location.pathname);
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
                <i className="ti-angle-down"></i>
                <NavDropdown.Item>
                  <Link to={"/training-home"}>Training</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={"/comming-soon"}>Cloud Labs</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={"/comming-soon"}>HR Solutions</Link>
                </NavDropdown.Item>

                {/*
              <NavDropdown.Item>Vendor Management</NavDropdown.Item>
              <NavDropdown.Item>Project Management</NavDropdown.Item>
              <NavDropdown.Item>GLocal Audit Compliance</NavDropdown.Item>
              */}
              </NavDropdown>
            )}

            {location.pathname !== "/" && (
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
              <Nav.Link href="/login" className="btn-main-common mr-3">
                <Link to={"/login"}>Login</Link>
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="/register"
                className="btn-main-common"
              >
                <Link to={"/register"}> Register </Link>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomeNavBar;
