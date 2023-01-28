import React from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OrderDetails = () => {
  const cartData = useSelector((state) => state.cart);
  // total price of cart items
  const total = cartData.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <div className="py-md-5">
      <h3>Your order</h3>
      <div className="cart-details border bg-light p-3 mt-md-5">
        <div className="cart-content p-3 bg-white">
          <div className="sub-total d-flex justify-content-between text-end">
            <p className="fw-bold">Product</p>
            <span className="fw-bold">Total</span>
          </div>
          <hr />
          {/* Get Cart items */}
          {cartData?.map((item) => {
            return (
              <div key={item.id}>
                <div className="sub-total d-flex gap-5 justify-content-between">
                  <p className="px-3">
                    {item.title} ×{" "}
                    <span className="fw-bold">{item.quantity}</span>
                  </p>
                  <span>$ {item.price}</span>
                </div>
                <hr />
              </div>
            );
          })}

          <div className="sub-total d-flex justify-content-between">
            <p className="fw-bold">Subtotal</p>
            <span>$ {total.toFixed(2)}</span>
          </div>
          <hr />
          <div className="sub-total d-flex justify-content-between">
            <p className="fw-bold">Shipping </p>
            {/* shpping */}
            <span>
              Local pickup: <span className="fw-bold">$2.00</span>
            </span>
          </div>
          <hr />

          <div className="sub-total d-flex justify-content-between">
            {/* total after shipping */}
            <p className="fw-bold">Total</p>
            <span className="text-success fw-bolder">
              $ {total.toFixed(2) + 2.0}
            </span>
          </div>
        </div>
        <Form.Group className="my-3" controlId="formBasicCheckbox">
          <Form.Check
            defaultChecked
            type="checkbox"
            label="I have read and agree to the website *"
          />
        </Form.Group>
        <Link
          to="/successScreen"
          className="d-block py-2 px-3 btn btn-dark border-1 mx-auto mt-3"
        >
          PLACE ORDER
        </Link>
      </div>
    </div>
  );
};

export default OrderDetails;
