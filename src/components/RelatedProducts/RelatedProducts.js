import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import TopLoading from "../../components/TopLoading/TopLoading";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Features/slices/cartSlice";

const RelatedProducts = () => {
  const { data, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Related Products</h2>
      {/* check related products  */}
      {loading ? (
        <TopLoading />
      ) : (
        data.map((product) => {
          return (
            <Col sm="6" md="3" key={product.id}>
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
    </>
  );
};

export default RelatedProducts;
