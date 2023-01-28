import React, { useEffect, useState } from "react";
import "./topProducts.css";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategory,
  fetchProducts,
} from "../../Features/slices/productsSlice";
import styles from "../Modules/styles.module.css";
import { addToCart } from "../../Features/slices/cartSlice";
import { Link } from "react-router-dom";
import TopLoading from "../TopLoading/TopLoading";
import { FilterCategories } from "../../data/data";
import Pagination from "../Pagination/Pagination";

const TopProducts = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(1);
  // Set Number of products in each page
  const [productsPerPage] = useState(8);
  // Get Products
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const indexOfLastPost = currentPage * productsPerPage;
  const indexOfFirstPost = indexOfLastPost - productsPerPage;
  // Get limited Data for pagination
  const currentProducts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Get current page in pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="top-products">
      <Container>
        <Row className="justify-content-center">
          <div className="col-sm-12 text-center">
            <h2>Top Selling Products</h2>
            <p className="text-muted">
              Forget about struggling to do everything at once: taking care of
              the family, Running your business etc.
            </p>
          </div>
        </Row>
        <Row className="mt-4">
          <Col>
            {/* Filter Categories Buttons */}
            <div className="products-btn text-center">
              <button
                onClick={() => dispatch(fetchProducts())}
                className={`${styles.shopBtn} mb-2`}
              >
                All
              </button>
              {FilterCategories.map((item) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      dispatch(fetchCategory(item.fetchName));
                    }}
                    className={`${styles.shopBtn} mb-2`}
                  >
                    {item.title}
                  </button>
                );
              })}
            </div>
          </Col>
        </Row>
        <Row className="py-5">
          {loading ? (
            <TopLoading />
          ) : (
            currentProducts.map((product) => {
              return (
                <Col sm="6" md="4" lg="3" key={product.id}>
                  <div className="product-content ">
                    <div className="prouct-container position-relative">
                      <div className="procut-img">
                        <Link
                          to={`/products/${product.id}`}
                          className="product-img position-relative"
                        >
                          <img
                            src={product.image}
                            className="img-fluid"
                            alt="productiMG"
                          />
                        </Link>
                      </div>
                      <div className="cart-btn">
                        <Link onClick={() => dispatch(addToCart(product))}>
                          ADD TO CART
                        </Link>
                      </div>
                    </div>
                    <p className="text-muted mb-0">
                      {product.category.toUpperCase()}
                    </p>
                    <span className="fw-bold">
                      {product.title.substring(0, 33)}
                    </span>
                    <p className="fw-bold">${product.price}</p>
                  </div>
                </Col>
              );
            })
          )}
          <Pagination
            currentPage={currentPage}
            postsPerPage={productsPerPage}
            totalPosts={data.length}
            paginate={paginate}
          />
        </Row>
      </Container>
    </section>
  );
};

export default TopProducts;
