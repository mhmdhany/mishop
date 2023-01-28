import React from "react";
import "./slider.css";
import Carousel from "react-bootstrap/Carousel";
import styles from "../Modules/styles.module.css";
import { Col } from "react-bootstrap";
import { motion } from "framer-motion";

const HeaderSlider = () => {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <div className="slider-content">
          <div className="container">
            <div className="row">
              <Col xl="6" md="8">
                <div className="slide-left">
                  <motion.div
                    animate={{ x: [50, 0], opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.2 }}
                    className="slide-sale"
                  >
                    20
                    <span>
                      %
                      <br />
                      off
                    </span>
                  </motion.div>
                  <div className="slide-title">
                    <motion.h1
                      initial={{ opacity: 0, x: "-100vh" }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                    >
                      Spring
                    </motion.h1>
                  </div>
                  <div className="slide-subtitle">Season festival</div>
                  <motion.span
                    initial={{ x: -1000 }}
                    animate={{ x: 0 ,scale: 1}}
                    // transition={{ delay: 1 }}
                    whileHover={{ scale: 1.2 }}
                    className="slide-since"
                  >
                    CATALOGUE 2023
                  </motion.span>
                </div>
              </Col>
              <Col xl="6" md="4" className="text-end d-none d-md-block">
                <motion.div
                  animate={{ x: [50, 0], opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileHover={{ x: 20 }}
                  className="slide-offer"
                >
                  Limited
                  <br />
                  Time
                  <br />
                  Offer
                </motion.div>
              </Col>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slider-content sliderTwo-content">
          <div className="container">
            <div className="row">
              <Col xl="6" md="8">
                <div className="slide-left">
                  <div className="slide-title">
                    <h1>New Arrival</h1>
                  </div>
                  <div className="slide-subtitle">For Women</div>
                  <button className={`${styles.shopBtn} mt-4`}>Shop Now</button>
                </div>
              </Col>
              <Col xl="6" md="4" className="text-end d-none d-md-block">
                <div className="slide-offer">
                  Limited
                  <br />
                  Time
                  <br />
                  Offer
                </div>
              </Col>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeaderSlider;
