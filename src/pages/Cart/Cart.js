import React from "react";
import "./cart.css";
import { Col, Container, Row } from "react-bootstrap";
import CartTable from "../../components/CartTable/CartTable";
import CartDetails from "../../components/CartDetails/CartDetails";

const Cart = () => {
  return (
    <div className="cart py-5">
      <Container>
        <Row>
          <Col xl="8">
            <CartTable />
          </Col>
          <Col xl="4">
            <CartDetails />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
