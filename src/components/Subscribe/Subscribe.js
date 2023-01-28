import React from "react";
import "./subscribe.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

const Subscribe = () => {
  return (
    <section className="subscribe py-5">
      <Container className="py-6">
        <Row className="justify-content-center align-items-center py-5">
          <Col sm="10" md="8" lg="6" className="py-5">
            <h2 className="fw-bold text-center text-black">
              Subscribe today and get 25% off on your first order!
            </h2>
            <div className="form-inputs">
              <form className="form d-inline-flex bg-white w-100 p-3">
                <input
                  className="form-input ps-3 border-0 w-100"
                  type="text"
                  placeholder="Enter your email"
                />
                {/* Subscribe button */}
                <div className="d-flex align-items-center">
                  <Link className="me-1 pointer">
                    <SendIcon size="small" sx={{ color: "#03D39F" }} />
                  </Link>
                  <Link className="subscribe-btn bg-white text-decoration-none">
                    Subscribe
                  </Link>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Subscribe;
