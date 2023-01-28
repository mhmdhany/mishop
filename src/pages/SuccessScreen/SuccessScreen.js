import React from "react";
import "./successScreen.css";
import CheckIcon from "@mui/icons-material/Check";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SuccessScreen = () => {
  const cartItems = useSelector((state) => state.cart);

  // Calc total price of cart items
  const total = cartItems.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <section className="success py-5 ">
      <Container>
        <Row className="justify-content-center">
          <Col lg="7">
            <div className="shadow-sm">
              {/* Thanks section */}
              <div className="thanku text-center">
                <CheckIcon
                  sx={{
                    fontSize: "80px",
                    lineHeight: "80px",
                    color: "#ffffff",
                    border: "3px solid #fff",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                />
                <h1 className="text-white">Thank You</h1>
                <span className="text-white">
                  Success! We received your payment. Your order will be
                  processed soon.
                </span>
                <strong className="text-white">
                  Transaction ID:637686G154T154485
                </strong>
              </div>

              {/* Confirm the order */}
              <div className="delivery p-4 p-md-5 bg-light text-center">
                <span className="text-muted">Expected Date Of Delivery</span>
                <h2 className="mb-0 mt-2">January 5, 2023</h2>
              </div>
              <div className="pt-4 px-4 pt-md-5 px-md-5 pb-3">
                <Row>
                  <Col lg="4">
                    <h6>Ship To</h6>
                    <ul className="list-unstyled mb-0">
                      <li>Alice Williams</li>
                      <li>B-87,Erceru erpopnt</li>
                      <li>Cairo</li>
                      <li>EG</li>
                    </ul>
                  </Col>
                  <Col lg="8">
                    <div className="text-lg-end ms-auto mt-4 mt-lg-0 col-lg-6">
                      <h6>Summary</h6>
                      <ul className="list-unstyled mb-0">
                        <li>
                          <span>Order ID:</span>
                          <strong>7582654455365</strong>
                        </li>
                        <li>
                          <span>Order Date:</span>
                          <strong>January 23, 2023</strong>
                        </li>
                        <li>
                          <span>Order Total:</span>
                          <strong>{total.toFixed(2)}</strong>
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* Ordered Details */}
              <div className="ordered-detail">
                <h5 className="mb-4">Your Ordered Details</h5>
                <div className="table-responsive">
                  <table className="table mb-0">
                    <tbody>
                      {cartItems.length > 0 ? (
                        cartItems.map((item) => {
                          return (
                            <tr key={item.id} className="ordered-item">
                              <td className="ordered-image">
                                <img
                                  className="img-fluid"
                                  src={item.image}
                                  alt="img"
                                />
                              </td>
                              <td className="ordered-name">
                                <h6 className="mb-0">Product Name</h6>
                                <span>{item.title}</span>
                              </td>
                              <td className="ordered-quantity">
                                <h6 className="mb-0">Quantity</h6>
                                <span>{item.quantity}</span>
                              </td>
                              <td className="ordered-price">
                                <h6 className="mb-0">Price</h6>
                                <span>$ {total.toFixed(2)}</span>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td className="text-center mt-2">no items found</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="table-responsive">
                  <table className="table total-table table-borderless mt-4 mb-0">
                    <tbody>
                      <tr>
                        <td>Subtotal</td>
                        <td className="text-end">${total}</td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td className="text-end">$2.00</td>
                      </tr>
                      <tr className="border-top">
                        <td>
                          <strong className="h5">Total</strong>
                        </td>
                        <td className="text-end h5">
                          <strong>$ {total + 2.0}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Go Home button */}
              <div className="d-sm-flex px-4 pb-4 px-md-5 pb-md-5">
                <Link to="/" className="button ms-auto">
                  Go to home
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SuccessScreen;
