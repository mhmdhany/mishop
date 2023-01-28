import React from "react";
import "./checkoutForm.css";
import { Form } from "react-bootstrap";
import { CheckoutData } from "../../data/data";

const CheckOutForm = () => {
  return (
    <div className="py-5">
      <h3>Billing details</h3>
      <Form className="check-form mt-3">
        {CheckoutData.map((item) => {
          return (
            <Form.Group key={item.id} className="mb-2">
              <Form.Label>{item.title}</Form.Label>
              <Form.Control type={item.type} placeholder={item.placeHolder} />
            </Form.Group>
          );
        })}
      </Form>
    </div>
  );
};

export default CheckOutForm;
