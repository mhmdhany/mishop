import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ currentPage,postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  // page numbers
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="d-flex justify-content-center mt-5">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item`}>
            <Link onClick={() => paginate(number)} className={`page-link ${currentPage === number ? "active" : ""}`}>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
