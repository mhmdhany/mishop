import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CheckOutForm from "../../components/CheckoutForm/CheckOutForm";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import "./checkout.css";

const Checkout = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md="6">
            <CheckOutForm />
          </Col>
          <Col md="6">
            <OrderDetails />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
