import React from "react";
import "./deal.css";
import styles from "../Modules/styles.module.css";

const Deal = () => {
  return (
    <section className="deal py-5 d-flex justify-content-center align-items-center">
      <div className="deal-content text-center">
        <div className="deal-banner ">50% OFF</div>
        <h2 className="display-2 fw-bold mt-3">Deal Of The Week</h2>
        <button className={`${styles.shopBtn} bg-white text-black deal-btn mt-5`}>
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Deal;
