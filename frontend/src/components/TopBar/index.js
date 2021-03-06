import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { Header, Navbrand, FaIcon, Navitem } from "./styles";
import { Link } from "react-router-dom";
import "./styles.css";

class TopBar extends Component {
  state = {
    isTop: true
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    return (
      <Header>
        <Navbar
          defaultActiveKey="/home"
          fixed="top"
          id="mainNavbar"
          variant="light"
          // className={this.state.isTop ? " " : "bg-light"}
          className="bg-light mb-5"
        >
          <Container>
            <Link to="/">
              <Navbrand>
                <FaIcon icon={faGlobeAmericas} />
                Immigrant Song
              </Navbrand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="justify-content-end">
              <Navitem>
                <Link to='/search' className="">Buscador</Link>
              </Navitem>
              {/* <Navitem>
                <Link to='#Sobre' className="ml-2">Sobre</Link>
              </Navitem> */}
            </Nav>
          </Container>
        </Navbar>
      </Header>
    );
  }
}

export default TopBar;
