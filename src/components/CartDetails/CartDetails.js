import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartDetails = () => {
  const cartData = useSelector((state) => state.cart);
  // Total Price
  const total = cartData.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <>
      <div className="cart-details border bg-light p-3">
        <h5 className="text-center fw-bold py-3">Cart totals</h5>
        <div className="cart-content p-3 bg-white">
          <div className="sub-total d-flex justify-content-between">
            <p className="fw-bold">Subtotal</p>
            <span>$ {total.toFixed(2)}</span>
          </div>
          <hr />
          <div className="sub-total d-flex justify-content-between">
            <p className="fw-bold">Shipping </p>
            <span>
              Local pickup: <span className="fw-bold">$2.00</span>
            </span>
          </div>
          <hr />
          <div className="sub-total d-flex justify-content-between text-end">
            <p className="fw-bold">Shipping Address</p>
            <span>
              B-87,Erceru erpopnt
              <br /> Arndurm UK
            </span>
          </div>
          <hr />
          <div className="sub-total d-flex justify-content-between">
            <p className="fw-bold">Total</p>
            <span className="text-success fw-bolder">
              {/* After adding shipping */}
              $ {total.toFixed(2) + 2.0}
            </span>
          </div>
        </div>
        <Link
          to="/checkout"
          className="d-block py-2 px-3 btn btn-dark border-1 mx-auto mt-3"
        >
          PROCEED TO CHECKOUT
        </Link>
      </div>
    </>
  );
};

export default CartDetails;
