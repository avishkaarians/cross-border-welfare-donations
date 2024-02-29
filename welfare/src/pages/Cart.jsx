import { useEffect } from "react";
import { link, useNavigate } from 'react-router-dom';
import Paypal from "../components/payments/PayPal";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  //addToCart,
  //decreaseQty,
  deleteProduct,
} from "../app/features/cart/cartSlice";
import { useState } from "react";


const Cart = () => {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  // middlware to localStorage
  /*const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );*/
  useEffect(() => {
    window.scrollTo(0, 0);
    // if(CartItem.length ===0) {
    //   const storedCart = localStorage.getItem("cartItem");
    //   setCartItem(JSON.parse(storedCart));
    // }
  }, []);
  const navigate = useNavigate();
  const [checkout, setCheckOut] = useState(false);

  return (
    <section className="cart-items">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {cartList.length === 0 && (
              <h1 className="no-items product">No Items are add in Cart</h1>
            )}
            {cartList.map((item) => {
              //const productQty = item.price * item.qty;
              return (
                <div className="cart-list" key={item.id}>
                  <Row>
                    <Col className="image-holder" sm={4} md={3}>
                      <img src={item.imgUrl} alt="" />
                    </Col>
                    <Col sm={8} md={9}>
                      <Row className="cart-content justify-content-center">
                        <Col xs={12} sm={9} className="cart-details">
                          <h3>{item.productName}</h3>

                        </Col>
                        <Col>
                          <button className="btn"
                            onClick={() => {
                              navigate("/paypal");
                            }}
                          >
                            <h3>Checkout</h3>
                          </button>
                        </Col>
                      </Row>
                    </Col>
                    <button
                      className="delete"
                      onClick={() => dispatch(deleteProduct(item))}
                    >
                      <ion-icon name="close"></ion-icon>
                    </button>
                  </Row>
                </div>
              );
            })}
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Cart;
