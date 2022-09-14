import { Link } from "react-router-dom";
import { Navbar, Nav, NavbarBrand, NavItem } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navigation.css";
import React, { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { signOutUser } from "../services/firebase";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  return (
    <div className="">
      <Navbar className="navbar" expand="md" fixed="top">
        <NavbarBrand className="logo" onClick={() => navigate("/")}>
          <Link to="/"></Link>
        </NavbarBrand>
        <Nav>
          <NavItem className="menu">
            <Link className="mx-2" to="/">
              Home
            </Link>
            <Link className="mx-2" to="/gamelist">
              Game List
            </Link>
          </NavItem>
        </Nav>
        <Nav>
          {currentUser ? (
            <NavItem className="midleware">
              <Link className="mx-2" to="/profile">
                {currentUser.displayName}
              </Link>
              <Link className="mx-2" to="/" onClick={signOutUser}>
                Logout
              </Link>
            </NavItem>
          ) : (
            <NavItem className="midleware">
              <Link className="mx-2" to="/signup">
                Signup
              </Link>
              <Link className="mx-2" to="/login">
                Login
              </Link>
            </NavItem>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
