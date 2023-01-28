import React, { useEffect } from "react";
import "./productDetails.css";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../Features/slices/cartSlice";
import styles from "../../components/Modules/styles.module.css";
import {
  fetchCategory,
  fetchProduct,
} from "../../Features/slices/productsSlice";
import TopLoading from "../../components/TopLoading/TopLoading";
import ProcutsBreadcrumb from "../../components/ProcutsBreadcrumb/ProcutsBreadcrumb";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";

const ProductDetails = () => {
  const dispatch = useDispatch();

  // Get the product id
  const { id } = useParams();

  const { productId, loading } = useSelector((state) => state.products);
  const currentId = parseInt(id);

  // Get Details of the Clicked Product
  useEffect(() => {
    dispatch(fetchProduct(currentId));
  }, [dispatch, currentId]);

  // Fetch Categories
  useEffect(() => {
    dispatch(fetchCategory(productId.category));
  }, [dispatch, productId]);

  return loading ? (
    <TopLoading />
  ) : (
    <>
      <Row className="bg-light py-3 mx-0 ps-5">
        <Col sm="12">
          <ProcutsBreadcrumb
            title={productId.category}
            item={productId.title}
          />
        </Col>
      </Row>
      <div className="product-detail py-5">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col md="5">
              <div className="detail-img text-center p-3 border border-1">
                <img
                  className="img-fluid"
                  src={productId.image}
                  alt="Currentimage"
                />
              </div>
            </Col>
            <Col md="7">
              <h4>{productId.title}</h4>
              <h5 className="text-success">$ {productId.price}</h5>
              <p className="text-muted">{productId.description}</p>
              <button
                onClick={() => dispatch(addToCart(productId))}
                className={styles.shopBtn}
              >
                ADD TO CART
              </button>
              <hr />
              <p className="fw-bold">
                Rate:
                <span className="text-warning"> 2.1</span>
              </p>
              <p className="fw-bold">
                Category:
                <span className="fw-normal text-muted">
                  {productId.category}
                </span>
              </p>
              <hr />
            </Col>
          </Row>
          {/* Related Products */}
          <Row className="py-5">
            <RelatedProducts />
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProductDetails;
