import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavbarToggler,
  Nav,
  NavLink,
  Collapse,
  NavbarText,
  Input,
  Button,
} from "reactstrap";
import "./header.css";

export default function Header() {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Rackonnect</NavbarBrand>
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Inventory</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Checkout (2)
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText className="header-search">
            <Input placeholder="Search..." />
          </NavbarText>
          <NavbarText className="header-signIn">
            <Button color="warning">Sign In</Button>
          </NavbarText>
          <NavbarText>
            <Button color="secondary">Log In</Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
