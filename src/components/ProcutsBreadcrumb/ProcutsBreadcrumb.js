import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";

const ProcutsBreadcrumb = ({ title, item }) => {
  return (
    <>
      <Breadcrumb>
        <HomeSharpIcon
          sx={{
            fontSize: "18px",
            marginTop: "3px",
            marginRight: "8px",
            "&:hover": {
              color: "#57BC94",
            },
          }}
        />
        <Link className="text-decoration-none text-dark me-1" to="/">
          Home /
        </Link>
        <Breadcrumb.Item active>{title}</Breadcrumb.Item>
        <Breadcrumb.Item active>{item}</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};

export default ProcutsBreadcrumb;
