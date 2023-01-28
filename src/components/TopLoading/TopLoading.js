import React from "react";
import loading from "../../assets/Loading.png";
import { motion } from "framer-motion";
// lOADING COMPONENT
const TopLoading = () => {
  return (
    <div className="loading text-center py-5 ">
      <motion.img
        initial={{ opacity: 1, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ repeat: Infinity,delay: 2, repeatDelay: 1 }}
        src={loading}
        alt="loading image"
      />
      {/* <span className="border shadow-sm p-3">Loading Products ... </span> */}
    </div>
  );
};

export default TopLoading;
