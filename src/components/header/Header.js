import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavLink,
  Collapse,
  NavbarText,
  Input,
  Button,
} from "reactstrap";
import "./header.css";
import { useStateValue } from "../../StateProvider";

export default function Header() {
  const [{ basket }, dispatch] = useStateValue();
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
                Checkout ({basket.length})
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
