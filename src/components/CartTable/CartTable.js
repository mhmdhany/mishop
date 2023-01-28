import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { clear, removeFromCart } from "../../Features/slices/cartSlice";
import { Link } from "react-router-dom";

const CartTable = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <Table bordered hover>
        <thead>
          <tr className="text-center">
            <th colSpan={2}>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {/* check Returned Cart items */}
          {cartData.length > 0 ? (
            cartData.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="text-center">
                    <Link className="text-black">
                      <DeleteIcon
                        sx={{
                          "&:hover": {
                            color: "#57BC94",
                          },
                        }}
                        onClick={() => dispatch(removeFromCart(item))}
                      />
                    </Link>
                  </td>
                  <td>{item.title}</td>
                  <td className="text-center">$ {item.price}</td>
                  <td className="text-center">{item.quantity}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td className="text-center " colSpan={5}>
                no items found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      {/* Clear All cart items */}
      {cartData.length > 0 && (
        <button
          onClick={() => dispatch(clear())}
          className="btn btn-danger ms-auto mb-2"
        >
          Clear All
        </button>
      )}
    </>
  );
};

export default CartTable;
