import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LatestPostData } from "../../data/data";

const LatestPost = () => {
  // Slider Settings
  const settings = {
    dots: true,
    className: "notes-slider",
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="text-center py-5">
      <h3>Our Latest Post</h3>
      <p className="pb-5 text-muted">
        Read what we say on our blog. you do not have to worry about getting
        stuck alone trying to figure everything out.
      </p>
      <Container>
        <Slider {...settings}>
          {LatestPostData.map((item) => {
            return (
              <div key={item.id}>
                <Row>
                  <Col md="6">
                    <div className="blog"></div>
                    <div className="blog-left">
                      <img className="img-fluid" src={item.img} alt="blogImg" />
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="blog-right text-start">
                      <div className="blog-meta">
                        <ul className="gap-2 d-inline-flex p-0">
                          <li className="list-unstyled">
                            <item.firstIcon
                              sx={{ color: "#03d39f" }}
                              fontSize="small"
                            />
                            <Link className="text-decoration-none text-muted ms-1">
                              {item.titleone}
                            </Link>
                          </li>
                          <li className="list-unstyled">
                            <item.sndIcon
                              sx={{ color: "#03d39f" }}
                              fontSize="small"
                            />
                            <Link className="text-decoration-none text-muted ms-1">
                              {item.titleTwo}
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <h5 className="fw-bold">{item.headTitle}</h5>
                      <p className="text-muted">{item.context}</p>
                      <Link className="mt-3 text-decoration-none text-black">
                        {item.read}
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            );
          })}
        </Slider>
      </Container>
    </div>
  );
};

export default LatestPost;
