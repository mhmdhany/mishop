import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  ContactInfo,
  Information,
  SocialIcons,
  UsefulLinks,
} from "../../data/data";
import Logo from "../../assets/Color logo with background.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer>
      <hr />
      <Container>
        <Row className="py-5">
          <Col lg="3" sm="6">
            <Link className="fw-bold">
              <img className="img-fluid" src={Logo} alt="" />
            </Link>
            <p className="text-muted">
              Mishop is an enchanting and easy to use e-Commerce WP theme that
              allows you to sell your products in a dynamic way.
            </p>
            <p className="text-muted">
              The theme is packed with everything you need to create a new
              website.
            </p>
            {/* Social Links */}
            <ul className="list-unstyled d-flex gap-2">
              {SocialIcons.map((item) => {
                return (
                  <motion.li
                    className="border p-2"
                    key={item.id}
                    whileHover={{ rotate: 180 }}
                  >
                    <Link>
                      <item.icon sx={{ color: "#57BC94" }} />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </Col>
          <Col lg="3" sm="6" className="ps-md-4">
            <h5 className="pt-4">Useful Links</h5>
            <ul className="list-unstyled text-muted">
              {UsefulLinks.map((item) => {
                return (
                  <motion.li
                    key={item.id}
                    className="py-1"
                    whileHover={{ x: 3 }}
                  >
                    <Link className="text-decoration-none text-muted">
                      <item.icon sx={{ fontSize: "12px" }} /> {item.title}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </Col>
          <Col lg="3" sm="6">
            <h5 className="pt-4">Information</h5>
            <ul className="list-unstyled text-muted">
              {Information.map((item) => {
                return (
                  <motion.li key={item.id} className="py-1"  whileHover={{ x: 3 }}>
                    <Link className="text-decoration-none text-muted">
                      <item.icon sx={{ fontSize: "12px" }} /> {item.title}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </Col>
          <Col lg="3" sm="6">
            <h5 className="pt-4">Contact Info</h5>
            <ul className="list-unstyled mt-3">
              {ContactInfo.map((item) => {
                return (
                  <li key={item.id} className="d-inline-flex gap-3">
                    <item.icon sx={{ color: "#57BC94" }} />
                    <p className="text-muted">{item.context}</p>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="py-3 text-center bg-light text-muted">
        © Copyright 2023 Mishop All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
