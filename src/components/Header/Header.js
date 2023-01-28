import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import Logo from "../../assets/Color logo with background.png";

const Header = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Navbar sticky="top" variant="light" bg="light" className="shadow-sm">
      <Container>
        {/* LOGO */}
        <Link className="navbar-brand fw-bold display-2" to="/">
          <img src={Logo} className="img-fluid" alt="logo" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarText">
          <div className="header-icons ms-auto">
            {/* Cart Icon */}
            <Link to="/cart" className="nav-link position-relative">
              <span>
                <ShoppingCartIcon />
              </span>
              <span className="cart-count">{cart.length}</span>
            </Link>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
