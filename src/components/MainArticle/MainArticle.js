import React from "react";
import "./mainArticle.css";
import styles from "../Modules/styles.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { ArticleData } from "../../data/data";
import { motion } from "framer-motion";

const MainArticle = () => {
  return (
    <div className="main-article py-lg-5 p-0">
      <Container className="py-5">
        <Row>
          <Col lg="3" sm="12" className="text-end">
            <h2 className="text-end display-4 fw-bold mb-2">End of Season</h2>
            <p className="text-muted">
              Avail massive discounts and get exciting offers with our shopping
              across all new arrival categories
            </p>
            <div className={styles["border-space"]}></div>
            <motion.button
              whileHover={{
                scale: 1.2,
                transition: { yoyo: Infinity },
              }}
              className={`${styles.shopBtn} mt-4 mb-4`}
            >
              Shop Now
            </motion.button>
          </Col>
          {ArticleData.map((item) => {
            return (
              <Col lg="3" md="4" key={item.id}>
                <div className="single-img">
                  <motion.img
                    whileHover={{ y: -10, opacity: 1, rotate: 4 }}
                    src={item.img}
                    alt="singleImg"
                    className="img-fluid attachment-full"
                  />
                </div>
                <Row className="single-content">
                  <Col sm="3" className="col-2">
                    <div className={item.titleStyle}></div>
                  </Col>
                  <Col sm="9" className="col-10">
                    <div
                      className="text-wrapper"
                    >
                      <p className={item.titleColor}>{item.title}</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default MainArticle;
