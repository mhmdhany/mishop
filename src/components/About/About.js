import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AboutImg from "../../assets/about.png";

const About = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md="6">
            <span>Know more</span>
            <h2 className="fw-bold display-6">About MiShop</h2>
            <p className="text-muted">
              We are MiShop ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veni quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col md="6">
            <img className="img-fluid" src={AboutImg} alt="AboutImg" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
